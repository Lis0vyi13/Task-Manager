import Notice from "../models/notification.js";
import Task from "../models/task.js";
import User from "../models/user.js";

export const dashboardStatistics = async (req, res) => {
  try {
    const { userId, isAdmin } = req.user;

    const allTasks = await Task.find({
      isTrashed: false,
    })
      .populate({
        path: "team",
        select: "name avatarColor avatar surname role title email",
      })
      .sort({ _id: -1 });

    const users = await User.find({ isActive: true })
      .select("name title role isAdmin createdAt")
      .limit(10)
      .sort({ _id: -1 });

    const groupTasks = allTasks.reduce((result, task) => {
      const stage = task.stage;

      if (!result[stage]) {
        result[stage] = 1;
      } else {
        result[stage] += 1;
      }

      return result;
    }, {});

    const groupData = Object.entries(
      allTasks.reduce(
        (result, task) => {
          const { priority } = task;
          const key = priority[0]?.toUpperCase() + priority.slice(1);

          result[key] = (result[key] || 0) + 1;
          return result;
        },
        { Low: 0, Normal: 0, Medium: 0, High: 0 },
      ),
    ).map(([name, Total]) => ({ name, Total }));

    const totalTasks = allTasks?.length;
    const last10Task = allTasks?.slice(0, 10);

    const summary = {
      totalTasks,
      last10Task,
      users: isAdmin ? users : [],
      tasks: groupTasks,
      graphData: groupData,
    };

    res.status(200).json({
      status: true,
      message: "Successfully",
      ...summary,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const { stage, isTrashed } = req.query;

    let query = { isTrashed: isTrashed ? true : false };

    if (stage) {
      query.stage = stage;
    }

    let queryResult = Task.find(query)
      .populate({
        path: "team",
        select: "name surname avatarColor avatar title email",
      })
      .sort({ _id: -1 });

    const tasks = await queryResult;

    res.status(200).json({
      status: true,
      tasks,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id)
      .populate({
        path: "team",
        select: "name surname avatarColor avatar title role email",
      })
      .populate({
        path: "activities.by",
        select: "name surname avatarColor avatar",
      });

    res.status(200).json({
      status: true,
      task,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getTrashedTasks = async (req, res) => {
  try {
    const { userId, isAdmin } = req.user;

    let query = { isTrashed: true };

    if (!isAdmin) {
      query.team = userId;
    }

    let tasks = await Task.find(query)
      .populate({
        path: "team",
        select: "name surname avatarColor avatar title email",
      })
      .sort({ _id: -1 });

    res.status(200).json({
      status: true,
      tasks,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { userId } = req.user;

    const { title, team, stage, date, priority, assets, description, links } = req.body;

    let text = "New task has been assigned to you.";
    if (team?.length > 1) {
      text = text + ` and ${team?.length - 1} others.`;
    }
    text =
      text +
      ` The task priority is set a ${
        priority.value
      } priority, so check and act accordingly. The task date is ${new Date(
        date,
      ).toDateString()}. Good luck!`;

    const activity = {
      type: "assigned",
      activity:
        "New task has been assigned to you. The task priority is set a low priority, so check and act accordingly. The task date is Fri Aug 02 2024. Good luck!",
      by: userId,
    };

    const task = await Task.create({
      title,
      team,
      stage: stage.value,
      date,
      priority: priority.value,
      assets,
      activities: [activity],
      description,
      links,
      createdBy: userId,
    });

    await Notice.create({
      team,
      text,
      task: task._id,
    });
    const populatedTask = await Task.findById(task._id)
      .populate("activities.by", "name surname avatar avatarColor")
      .exec();

    res.status(200).json({ status: true, populatedTask, message: "Task created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const postTaskActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const { type: requestType, activity } = req.body;
    const type = requestType?.toLowerCase();

    const task = await Task.findById(id);

    const data = {
      type,
      activity,
      by: userId,
    };

    task.activities.push(data);

    await task.save();

    res.status(200).json({ status: true, message: "Activity posted successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const createSubTask = async (req, res) => {
  try {
    const { userId } = req.user;
    const { title, tag, date, _id } = req.body;

    const newSubTask = {
      title,
      date,
      tag,
      createdBy: userId,
      done: false,
    };

    const task = await Task.findById(_id);

    task.subTasks.push(newSubTask);

    await task.save();

    res.status(200).json({ status: true, message: "Subtask added successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const updateSubTask = async (req, res) => {
  try {
    const { _id, subTaskId, title, tag, date } = req.body;

    const task = await Task.findById(_id);

    if (!task) {
      return res.status(404).json({ status: false, message: "Task not found." });
    }

    const subTask = task.subTasks.id(subTaskId);

    if (!subTask) {
      return res.status(404).json({ status: false, message: "Subtask not found." });
    }

    subTask.title = title;
    subTask.tag = tag;
    subTask.date = date;

    await task.save();

    res.status(200).json({ status: true, message: "Subtask updated successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const markSubtaskDone = async (req, res) => {
  try {
    const { taskId, subTaskId } = req.body;

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ status: false, message: "Task not found." });
    }

    const subTask = task.subTasks.id(subTaskId);

    if (!subTask) {
      return res.status(404).json({ status: false, message: "Subtask not found." });
    }

    subTask.done = !subTask.done;

    await task.save();

    res.status(200).json({ status: true, message: "Subtask done state toggled successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, team, stage, priority, assets, description, links } = req.body;

    const task = await Task.findById(id);

    task.title = title;
    task.date = date;
    task.priority = priority.value;
    task.assets = assets;
    task.stage = stage.value;
    task.team = team;
    task.description = description;
    task.links = links;

    await task.save();

    res.status(200).json({ status: true, message: "Task updated successfully." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const updateTaskStage = async (req, res) => {
  const { id } = req.params;
  const { stage } = req.body;

  try {
    const validStages = ["todo", "in progress", "completed"];
    console.log(stage);
    if (!validStages.includes(stage)) {
      return res.status(400).json({
        message: "Invalid stage value",
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(id, { stage }, { new: true });

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const trashTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    task.isTrashed = true;

    await task.save();

    res.status(200).json({
      status: true,
      message: `Task trashed successfully.`,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const deleteRestoreTask = async (req, res) => {
  try {
    const { userId, isAdmin } = req.user;
    const { id } = req.params;
    const { actionType } = req.query;

    const query = { isTrashed: true };

    if (!isAdmin) {
      query.team = userId;
    }

    if (actionType === "delete") {
      await Task.findByIdAndDelete(id);
    } else if (actionType === "deleteAll") {
      await Task.deleteMany(query);
    } else if (actionType === "restore") {
      const resp = await Task.findById(id);

      resp.isTrashed = false;
      resp.save();
    } else if (actionType === "restoreAll") {
      await Task.updateMany(query, { $set: { isTrashed: false } });
    }

    res.status(200).json({
      status: true,
      message: `Operation performed successfully.`,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

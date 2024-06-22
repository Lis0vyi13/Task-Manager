import TaskStage from "../../TaskStage/TaskStage";
import TasksTitle from "../TasksTitle/TasksTitle";

import { TASK_TYPE } from "@/constants";

import styles from "./BoardView.module.scss";

const BoardView = ({ tasks }) => {
  const stages = ["todo", "in progress", "completed"];
  const titles = [
    { name: "To do", stage: "todo", color: TASK_TYPE.todo },
    {
      name: "In progress",
      stage: "in progress",
      color: TASK_TYPE["in progress"],
    },
    { name: "Completed", stage: "completed", color: TASK_TYPE.completed },
  ];

  return (
    <section className={styles.boardView}>
      {stages.map((stage) => (
        <div key={stage}>
          {titles
            .filter((title) => title.stage === stage)
            .map((title) => (
              <TasksTitle {...title} key={title.name}>
                {title.name}
              </TasksTitle>
            ))}
          <TaskStage stage={stage} tasks={tasks} />
        </div>
      ))}
    </section>
  );
};

export default BoardView;

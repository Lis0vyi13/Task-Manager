import User from "../models/user.js";
import { createJWT } from "../utils/index.js";
import Notice from "../models/notification.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, surname, password, isAdmin, role, title } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      surname,
      email,
      password,
      isAdmin,
      role,
      title,
    });

    if (user) {
      createJWT(res, user._id);

      user.password = undefined;

      res.status(201).json(user);
    } else {
      return res.status(400).json({ status: false, message: "Invalid user data" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ status: false, message: "User does not exist" });
    }

    const isMatch = await user.matchPassword(password);

    if (user && isMatch) {
      createJWT(res, user._id);

      user.password = undefined;

      return res.status(200).json(user);
    } else {
      return res.status(401).json({ status: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.cookie("__u", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.cookie("__l", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getTeamList = async (req, res) => {
  try {
    const users = await User.find().select(
      "name surname avatarColor email isActive isAdmin avatar title role createdAt",
    );

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getNotificationsList = async (req, res) => {
  try {
    const { userId } = req.user;
    const notice = await Notice.find({
      team: userId,
      isRead: { $nin: [userId] },
    });

    res.status(201).json(notice);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId).select("-password");

    if (user) {
      res.status(200).json({
        status: true,
        user,
      });
    } else {
      res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (user) {
      res.status(200).json({
        status: true,
        user,
      });
    } else {
      res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const sendNotification = async (req, res) => {
  try {
    const { team, text } = req.body;

    if (!team || team.length === 0 || !text) {
      return res.status(400).json({ status: false, message: "Team and text are required" });
    }

    const notification = new Notice({
      team,
      text,
      isRead: [],
    });

    await notification.save();

    res.status(201).json({
      status: true,
      message: "Notification sent successfully",
      notification,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Failed to send notification",
      error: error.message,
    });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { userId, isAdmin } = req.user;
    const {
      _id,
      name,
      surname,
      title,
      role,
      email,
      avatarColor,
      avatar,
      isActive,
      isAdmin: isEditedUserAdmin,
    } = req.body;
    const id = isAdmin && userId === _id ? userId : isAdmin && userId !== _id ? _id : userId;
    const user = await User.findById(id);

    if (user) {
      if (email && email !== user.email) {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ status: false, message: "Email already in use" });
        }
      }
      user.name = name || user.name;
      user.surname = surname || user.surname;
      user.title = title || user.title;
      user.role = role || user.role;
      user.email = email || user.email;
      user.avatarColor = avatarColor || user.avatarColor;
      user.avatar = avatar || user.avatar;
      user.isActive = isActive ? isActive.value : user.isActive;
      user.isAdmin = isEditedUserAdmin ? isEditedUserAdmin.value : user.isAdmin;

      const updatedUser = await user.save();
      user.password = undefined;

      res.status(201).json({
        status: true,
        message: "Profile Updated Successfully.",
        user: updatedUser,
      });
    } else {
      res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const markNotificationRead = async (req, res) => {
  try {
    const { userId } = req.user;

    const { readType, id } = req.query;

    if (readType === "all") {
      await Notice.updateMany(
        { team: userId, isRead: { $nin: [userId] } },
        { $push: { isRead: userId } },
        { new: true },
      );
    } else {
      await Notice.findOneAndUpdate(
        { _id: id, isRead: { $nin: [userId] } },
        { $push: { isRead: userId } },
        { new: true },
      );
    }

    res.status(201).json({ status: true, message: "Done" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const changeUserPassword = async (req, res) => {
  try {
    const { userId } = req.user;
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);

    if (user) {
      const isMatch = await user.matchPassword(oldPassword);

      if (!isMatch) {
        return res.status(400).json({ status: false, message: "Old password is incorrect" });
      }

      user.password = newPassword;

      await user.save();

      user.password = undefined;

      res.status(201).json({
        status: true,
        message: "Password changed successfully.",
      });
    } else {
      res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const deleteUserProfile = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.status(200).json({ status: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

import { MdDashboard } from "react-icons/md";
import { FaTasks, FaTrash, FaUser, FaListAlt } from "react-icons/fa";
import { IoCheckmarkDoneCircle, IoLogOut } from "react-icons/io5";
import {
  RiProgress5Line,
  RiTodoFill,
  RiTeamFill,
  RiLockPasswordFill,
} from "react-icons/ri";

export const loginInputs = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "email@gmail.com",
    autoComplete: "email",
    options: {
      required: { value: true, message: "Email is required" },
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Invalid email address",
      },
    },
    tabIndex: 1,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Your password",
    autoComplete: "current-password",
    options: {
      required: { value: true, message: "Password is required" },
      minLength: {
        value: 4,
        message: "Password must be at least 4 characters long",
      },
    },
    tabIndex: 2,
  },
];

export const navLinks = [
  { name: "Dashboard", Icon: MdDashboard, to: "/dashboard" },
  { name: "Tasks", Icon: FaTasks, to: "/tasks" },
  { name: "Completed", Icon: IoCheckmarkDoneCircle, to: "/completed" },
  { name: "In Progress", Icon: RiProgress5Line, to: "/in-progress" },
  { name: "To Do", Icon: RiTodoFill, to: "/to-do" },
  { name: "Team", Icon: RiTeamFill, to: "/team" },
  { name: "Trash", Icon: FaTrash, to: "/trash" },
];

export const userAvatarButtons = [
  {
    name: "Profile",
    Icon: FaUser,
    to: "",
  },
  {
    name: "Change password",
    Icon: RiLockPasswordFill,
    to: "",
  },
  {
    name: "Logout",
    Icon: IoLogOut,
    to: "",
    type: "button",
    color: "#f44336",
  },
];

export const notifications = [
  {
    id: 1,
    text: "New task has been assigned to you and 2 others. The task priority is set a normal priority, so check and act accordingly.",
    createdAt: "2024-06-14T17:08:23Z",
  },
  {
    id: 2,
    text: "New task has been assigned to you and 2 others. The task priority is set a normal priority, so check and act accordingly.",
    createdAt: "2024-05-14T17:08:23Z",
  },
  {
    id: 3,
    text: "New task has been assigned to you and 2 others. The task priority is set a normal priority, so check and act accordingly.",
    createdAt: "2024-04-14T17:08:23Z",
  },
];

export const dashboardCards = [
  {
    id: 1,
    title: "Total task",
    amount: 10,
    color: "blue",
    Icon: FaListAlt,
    createdAt: "2024-06-14T17:08:23Z",
  },
  {
    id: 2,
    title: "Completed task",
    amount: 1,
    color: "green",
    Icon: IoCheckmarkDoneCircle,
    createdAt: "2024-05-14T17:08:23Z",
  },
  {
    id: 3,
    title: "Task in progress",
    amount: 3,
    color: "orange",
    Icon: RiProgress5Line,
    createdAt: "2022-06-14T17:08:23Z",
  },
  {
    id: 4,
    title: "Todos",
    amount: 6,
    color: "red",
    Icon: RiTodoFill,
    createdAt: "2021-06-14T17:08:23Z",
  },
];

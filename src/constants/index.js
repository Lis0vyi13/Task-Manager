import { MdDashboard } from "react-icons/md";
import { FaTasks, FaTrash } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiProgress5Line, RiTodoFill, RiTeamFill } from "react-icons/ri";

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
  { name: "Dashboard", img: MdDashboard, to: "/dashboard" },
  { name: "Tasks", img: FaTasks, to: "/tasks" },
  { name: "Completed", img: IoCheckmarkDoneCircle, to: "/completed" },
  { name: "In Progress", img: RiProgress5Line, to: "/in-progress" },
  { name: "To Do", img: RiTodoFill, to: "/to-do" },
  { name: "Team", img: RiTeamFill, to: "/team" },
  { name: "Trash", img: FaTrash, to: "/trash" },
];

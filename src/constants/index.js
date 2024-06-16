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

export const chartData = [
  { name: "1", total: 2200 },
  { name: "2", total: 1210 },
  { name: "3", total: 1590 },
  { name: "4", total: 1390 },
  { name: "5", total: 1890 },
  { name: "6", total: 190 },
  { name: "8", total: 1190 },
  { name: "9", total: 1990 },
  { name: "10", total: 590 },
];

export const tasksCategories = ["Task title", "Priority", "Team", "Created At"];

export const tasksData = [
  {
    _id: "65c5f12ab5204a81bde866a9",
    title: "Test task",
    date: "2024-02-09T00:00:00.000Z",
    priority: "high",
    stage: "todo",
    assets: [
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707471138863original-a005132062ca5bafc505c4c74f0e1865.jpg?alt=media&token=55f909f2-7f05-42f3-af4f-dc7f87cdea1d",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707471144712PsZch9E1_400x400.jpg?alt=media&token=7ce62c7e-c240-4032-83c6-bb6c9cdc0d4b",
    ],
    team: [
      {
        _id: "65c202d4aa62f32ffd1303cc",
        name: "Codewave Asante",
        title: "Administrator",
        role: "Admin",
        email: "admin@gmail.com",
      },
      {
        _id: "65c30b96e639681a13def0b5",
        name: "Jane Smith",
        title: "Product Manager",
        role: "Manager",
        email: "jane.smith@example.com",
      },
      {
        _id: "65c317360fd860f958baa08e",
        name: "Alex Johnson",
        title: "UX Designer",
        role: "Designer",
        email: "alex.johnson@example.com",
      },
    ],
    isTrashed: false,
    activities: [],
    subTasks: [
      {
        title: "Task manager youtube tutorial",
        date: "2024-02-09T00:00:00.000Z",
        tag: "tutorial",
        _id: "65c5f153b5204a81bde866c8",
      },
    ],
    createdAt: "2024-02-09T09:32:26.574Z",
    updatedAt: "2024-02-09T09:36:53.339Z",
    __v: 1,
  },
  {
    _id: "65c5d547660756f6fd453a7a",
    title: "Duplicate - Duplicate - Review Code Changes",
    date: "2024-02-09T00:00:00.000Z",
    priority: "medium",
    stage: "in progress",
    assets: [],
    team: [
      {
        _id: "65c317360fd860f958baa08e",
        name: "Alex Johnson",
        title: "UX Designer",
        role: "Designer",
        email: "alex.johnson@example.com",
      },
      {
        _id: "65c3176a0fd860f958baa099",
        name: "Emily Wilson",
        title: "Data Analyst",
        role: "Analyst",
        email: "emily.wilson@example.com",
      },
    ],
    isTrashed: false,
    activities: [
      {
        type: "started",
        activity: "Project started",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f18bb5204a81bde866d1",
      },
      {
        type: "commented",
        activity: "i like coding!!",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f19eb5204a81bde866dd",
      },
      {
        type: "bug",
        activity: "bug found",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f1abb5204a81bde866eb",
      },
    ],
    subTasks: [
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-08T00:00:00.000Z",
        tag: "Website App",
        _id: "65c3535476ed5c48f9440973",
      },
    ],
    createdAt: "2024-02-09T07:33:27.590Z",
    updatedAt: "2024-02-09T09:36:10.386Z",
    __v: 4,
  },
  {
    _id: "65c46026af6ec0118be9407a",
    title: "Website Project Proposal Review",
    date: "2024-02-07T00:00:00.000Z",
    priority: "high",
    stage: "todo",
    assets: [
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707410130023hand-holding-writing-checklist-application-form-document-clipboard-white-background-3d-illustration.jpg?alt=media&token=08de4848-517f-48ca-a9b4-624744d5ddb0",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412301523image_processing20220706-26930-ktfgon.png?alt=media&token=6cd185c1-9fc3-4f52-bb0b-0d4a29e65b85",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412306237image_processing20220706-11953-1f826f4.png?alt=media&token=7270475f-a994-41fd-8ae6-62e00f72b0b3",
    ],
    team: [
      {
        _id: "65c202d4aa62f32ffd1303cc",
        name: "Codewave Asante",
        title: "Administrator",
        role: "Admin",
        email: "admin@gmail.com",
      },
      {
        _id: "65c27a0e18c0a1b750ad5cad",
        name: "John Doe",
        title: "Software Engineer",
        role: "Developer",
        email: "john.doe@example.com",
      },
      {
        _id: "65c30b96e639681a13def0b5",
        name: "Jane Smith",
        title: "Product Manager",
        role: "Manager",
        email: "jane.smith@example.com",
      },
    ],
    isTrashed: false,
    activities: [
      {
        type: "assigned",
        activity: "Test activity. Let's go!!!",
        date: "2024-02-08T17:55:34.353Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5188be1585cfa650b79c4",
      },
      {
        type: "in progress",
        activity: "Project is progress. Hiope to fin=ish soon!!",
        date: "2024-02-08T17:55:34.353Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c518dce1585cfa650b79da",
      },
      {
        type: "bug",
        activity: "Bug found in the code. Kindly check and fixed ASAP!!!",
        date: "2024-02-08T18:13:14.717Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c51a5e8064df97d208b392",
      },
      {
        type: "commented",
        activity: "Nice work. Let's finished hard!!!",
        date: "2024-02-08T18:13:14.717Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c51af08064df97d208b3b0",
      },
    ],
    subTasks: [
      {
        title: "Blog App Dashboard",
        date: "2024-02-06T00:00:00.000Z",
        tag: "Design",
        _id: "65c352e776ed5c48f944095c",
      },
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-07T00:00:00.000Z",
        tag: "Design",
        _id: "65c3531476ed5c48f9440965",
      },
    ],
    createdAt: "2024-02-08T05:01:26.983Z",
    updatedAt: "2024-02-09T06:51:15.005Z",
    __v: 8,
  },
  {
    _id: "65c45fb6af6ec0118be94052",
    title: "Task Manager Youtube Video",
    date: "2024-02-11T00:00:00.000Z",
    priority: "medium",
    stage: "completed",
    assets: [
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412043078report.jpg?alt=media&token=41d02b42-c25c-4fbb-90a9-340a45f4bbe1",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412052287hand-holding-writing-checklist-application-form-document-clipboard-white-background-3d-illustration.jpg?alt=media&token=98b360b4-954c-47e3-8283-8228a54a327c",
    ],
    team: [
      {
        _id: "65c317360fd860f958baa08e",
        name: "Alex Johnson",
        title: "UX Designer",
        role: "Designer",
        email: "alex.johnson@example.com",
      },
      {
        _id: "65c3176a0fd860f958baa099",
        name: "Emily Wilson",
        title: "Data Analyst",
        role: "Analyst",
        email: "emily.wilson@example.com",
      },
    ],
    isTrashed: false,
    activities: [
      {
        type: "completed",
        activity: "Project completed!!",
        date: "2024-02-08T18:13:14.717Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c51b998064df97d208b3f9",
      },
    ],
    subTasks: [
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-08T00:00:00.000Z",
        tag: "Website App",
        _id: "65c3535476ed5c48f9440973",
      },
    ],
    createdAt: "2024-02-08T04:59:34.826Z",
    updatedAt: "2024-02-09T06:51:15.005Z",
    __v: 3,
  },
  {
    _id: "65c4586f0548279012f8c256",
    title: "Bug Fixing",
    date: "2024-02-07T00:00:00.000Z",
    priority: "high",
    stage: "todo",
    assets: [
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412457946Wed%20Dev%20Course.png?alt=media&token=028416bf-88c6-4738-9a5a-d90e6d53b202",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412466672original-380755132e03e80a9fa3ef1203219cf3.png?alt=media&token=10d96b0d-feea-4627-aa1e-9b8f87cf7500",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412469358original-a738b8d0cbced29ae8609072d006fbcb.jpg?alt=media&token=9a6cc56f-63ff-4405-b978-d962c3c1f1d0",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412472346cosial.png?alt=media&token=b6e427b3-bc36-4fa2-a8f9-438f9ebf93e2",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412478590original-a005132062ca5bafc505c4c74f0e1865.jpg?alt=media&token=e81047bd-a1e2-49e5-85f5-feda31c423f2",
    ],
    team: [
      {
        _id: "65c30b96e639681a13def0b5",
        name: "Jane Smith",
        title: "Product Manager",
        role: "Manager",
        email: "jane.smith@example.com",
      },
      {
        _id: "65c202d4aa62f32ffd1303cc",
        name: "Codewave Asante",
        title: "Administrator",
        role: "Admin",
        email: "admin@gmail.com",
      },
      {
        _id: "65c317360fd860f958baa08e",
        name: "Alex Johnson",
        title: "UX Designer",
        role: "Designer",
        email: "alex.johnson@example.com",
      },
    ],
    isTrashed: false,
    activities: [
      {
        type: "commented",
        activity: "Great!!!",
        date: "2024-02-08T18:13:14.717Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c51b678064df97d208b3d6",
      },
    ],
    subTasks: [
      {
        title: "Check Login code and fix bugs asap",
        date: "2024-02-08T00:00:00.000Z",
        tag: "Bug Fixing",
        _id: "65c46074af6ec0118be94094",
      },
    ],
    createdAt: "2024-02-08T04:28:31.966Z",
    updatedAt: "2024-02-09T06:51:15.005Z",
    __v: 3,
  },
  {
    _id: "65c3c457fb9c6768ce4bc31a",
    title: "Duplicate - Website Project Proposal",
    date: "2024-02-07T17:55:13.218Z",
    priority: "high",
    stage: "todo",
    assets: [],
    team: [
      {
        _id: "65c202d4aa62f32ffd1303cc",
        name: "Codewave Asante",
        title: "Administrator",
        role: "Admin",
        email: "admin@gmail.com",
      },
      {
        _id: "65c27a0e18c0a1b750ad5cad",
        name: "John Doe",
        title: "Software Engineer",
        role: "Developer",
        email: "john.doe@example.com",
      },
      {
        _id: "65c30b96e639681a13def0b5",
        name: "Jane Smith",
        title: "Product Manager",
        role: "Manager",
        email: "jane.smith@example.com",
      },
    ],
    isTrashed: false,
    activities: [],
    subTasks: [
      {
        title: "Blog App Dashboard",
        date: "2024-02-06T00:00:00.000Z",
        tag: "Design",
        _id: "65c352e776ed5c48f944095c",
      },
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-07T00:00:00.000Z",
        tag: "Design",
        _id: "65c3531476ed5c48f9440965",
      },
    ],
    createdAt: "2024-02-07T17:56:39.969Z",
    updatedAt: "2024-02-09T06:51:15.005Z",
    __v: 1,
  },
  {
    _id: "65c3c439fb9c6768ce4bc308",
    title: "Duplicate - Review Code Changes",
    date: "2024-02-07T17:55:13.218Z",
    priority: "medium",
    stage: "in progress",
    assets: [],
    team: [
      {
        _id: "65c317360fd860f958baa08e",
        name: "Alex Johnson",
        title: "UX Designer",
        role: "Designer",
        email: "alex.johnson@example.com",
      },
      {
        _id: "65c3176a0fd860f958baa099",
        name: "Emily Wilson",
        title: "Data Analyst",
        role: "Analyst",
        email: "emily.wilson@example.com",
      },
    ],
    isTrashed: false,
    activities: [],
    subTasks: [
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-08T00:00:00.000Z",
        tag: "Website App",
        _id: "65c3535476ed5c48f9440973",
      },
    ],
    createdAt: "2024-02-07T17:56:09.174Z",
    updatedAt: "2024-02-07T17:56:09.456Z",
    __v: 1,
  },
  {
    _id: "65c3c21f55ae9b2f7666e86c",
    title: "Duplicate - Website Project Proposal",
    date: "2024-02-07T17:46:56.040Z",
    priority: "normal",
    stage: "todo",
    assets: [],
    team: [
      {
        _id: "65c202d4aa62f32ffd1303cc",
        name: "Codewave Asante",
        title: "Administrator",
        role: "Admin",
        email: "admin@gmail.com",
      },
      {
        _id: "65c27a0e18c0a1b750ad5cad",
        name: "John Doe",
        title: "Software Engineer",
        role: "Developer",
        email: "john.doe@example.com",
      },
      {
        _id: "65c30b96e639681a13def0b5",
        name: "Jane Smith",
        title: "Product Manager",
        role: "Manager",
        email: "jane.smith@example.com",
      },
    ],
    isTrashed: false,
    activities: [],
    subTasks: [
      {
        title: "Blog App Dashboard",
        date: "2024-02-06T00:00:00.000Z",
        tag: "Design",
        _id: "65c352e776ed5c48f944095c",
      },
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-07T00:00:00.000Z",
        tag: "Design",
        _id: "65c3531476ed5c48f9440965",
      },
    ],
    createdAt: "2024-02-07T17:47:11.560Z",
    updatedAt: "2024-02-07T17:47:11.972Z",
    __v: 1,
  },
  {
    _id: "65c352b376ed5c48f9440955",
    title: "Review Code Changes",
    date: "2024-02-05T00:00:00.000Z",
    priority: "medium",
    stage: "in progress",
    assets: [],
    team: [
      {
        _id: "65c317360fd860f958baa08e",
        name: "Alex Johnson",
        title: "UX Designer",
        role: "Designer",
        email: "alex.johnson@example.com",
      },
      {
        _id: "65c3176a0fd860f958baa099",
        name: "Emily Wilson",
        title: "Data Analyst",
        role: "Analyst",
        email: "emily.wilson@example.com",
      },
    ],
    isTrashed: false,
    activities: [],
    subTasks: [
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-08T00:00:00.000Z",
        tag: "Website App",
        _id: "65c3535476ed5c48f9440973",
      },
    ],
    createdAt: "2024-02-07T09:51:47.149Z",
    updatedAt: "2024-02-07T09:54:28.645Z",
    __v: 1,
  },
  {
    _id: "65c351b976ed5c48f9440947",
    title: "Website Project Proposal",
    date: "2024-02-07T00:00:00.000Z",
    priority: "high",
    stage: "todo",
    assets: [],
    team: [
      {
        _id: "65c202d4aa62f32ffd1303cc",
        name: "Codewave Asante",
        title: "Administrator",
        role: "Admin",
        email: "admin@gmail.com",
      },
      {
        _id: "65c27a0e18c0a1b750ad5cad",
        name: "John Doe",
        title: "Software Engineer",
        role: "Developer",
        email: "john.doe@example.com",
      },
      {
        _id: "65c30b96e639681a13def0b5",
        name: "Jane Smith",
        title: "Product Manager",
        role: "Manager",
        email: "jane.smith@example.com",
      },
    ],
    isTrashed: false,
    activities: [],
    subTasks: [
      {
        title: "Blog App Dashboard",
        date: "2024-02-06T00:00:00.000Z",
        tag: "Design",
        _id: "65c352e776ed5c48f944095c",
      },
      {
        title: "Blog App Admin Dashboard",
        date: "2024-02-07T00:00:00.000Z",
        tag: "Design",
        _id: "65c3531476ed5c48f9440965",
      },
    ],
    createdAt: "2024-02-07T09:47:37.337Z",
    updatedAt: "2024-02-07T09:53:24.079Z",
    __v: 2,
  },
];

export const PRIOTITY_STYLES = {
  high: "#DC2626",
  medium: "#D97706",
  low: "#2563EB",
};

export const TASK_TYPE = {
  todo: "#2563EB",
  "in progress": "#D97706",
  completed: "#059669",
};

export const TASK_BGS = ["#2563EB", "#DC2626", "#D97706", "#059669"];

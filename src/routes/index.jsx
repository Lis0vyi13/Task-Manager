import { Navigate } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import TasksPage from "../pages/TasksPage";
import CompletedPage from "../pages/CompletedPage";
import InProgressPage from "../pages/InProgressPage";
import TodoPage from "../pages/TodoPage";
import TeamPage from "../pages/TeamPage";
import TrashPage from "../pages/TrashPage";

const routes = [
  { index: true, element: <Navigate to={"dashboard"} /> },
  { path: "dashboard", element: <DashboardPage /> },
  { path: "tasks", element: <TasksPage /> },
  { path: "completed", element: <CompletedPage /> },
  { path: "in-progress", element: <InProgressPage /> },
  { path: "to-do", element: <TodoPage /> },
  { path: "team", element: <TeamPage /> },
  { path: "trash", element: <TrashPage /> },
];

export default routes;

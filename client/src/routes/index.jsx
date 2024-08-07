import { Navigate } from "react-router-dom";

import {
  CompletedPage,
  DashboardPage,
  InProgressPage,
  TasksPage,
  TeamPage,
  TodoPage,
  TrashPage,
  TaskInfoPage,
} from "@/pages";

const routes = [
  { index: true, element: <Navigate to={"dashboard"} /> },
  {
    path: "dashboard",
    element: <DashboardPage />,
  },
  {
    path: "tasks",
    element: <TasksPage />,
  },
  {
    path: "completed",
    element: <CompletedPage />,
  },
  {
    path: "in-progress",
    element: <InProgressPage />,
  },
  {
    path: "to-do",
    element: <TodoPage />,
  },
  {
    path: "team",
    element: <TeamPage />,
  },
  {
    path: "trash",
    element: <TrashPage />,
  },
  {
    path: "task/:id",
    element: <TaskInfoPage />,
  },
];

export default routes;

import { lazy } from "react";

export const DashboardPage = lazy(() =>
  import("@/pages/Dashboard/DashboardPage"),
);
export const TasksPage = lazy(() => import("@/pages/Tasks/TasksPage"));
export const CompletedPage = lazy(() => import("@/pages/CompletedPage"));
export const InProgressPage = lazy(() => import("@/pages/InProgressPage"));
export const TodoPage = lazy(() => import("@/pages/TodoPage"));
export const TeamPage = lazy(() => import("@/pages/TeamPage"));
export const TrashPage = lazy(() => import("@/pages/TrashPage"));

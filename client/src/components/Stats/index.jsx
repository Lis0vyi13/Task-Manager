import { useMemo } from "react";
import { useSelector } from "react-redux";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import moment from "moment/moment";

import StatsCard from "./StatsCard";

import { FaListAlt } from "react-icons/fa";
import { RiProgress5Line, RiTodoFill } from "react-icons/ri";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import styles from "./Stats.module.scss";

const Stats = () => {
  const stats = useSelector((store) => store?.tasks?.dashboardStats || {});
  const allTasks = useSelector((store) => store?.tasks?.tasks || {});
  const { last10Task = [], totalTasks = 0, tasks: taskStages = {} } = stats;

  const getUpdatedAtTime = (task) => {
    return capitalizeFirstLetter(moment(task?.updatedAt).fromNow());
  };

  const statsCards = useMemo(
    () => [
      {
        id: 1,
        title: "Total task",
        color: "blue",
        type: "all",
        value: totalTasks,
        href: "/tasks",
        Icon: FaListAlt,
        updatedAt:
          capitalizeFirstLetter(moment(last10Task[0]?.updatedAt).fromNow()) || "No data found",
      },
      {
        id: 2,
        title: "Todos",
        color: "red",
        type: "todo",
        href: "/to-do",
        value: taskStages?.todo,
        Icon: RiTodoFill,
        updatedAt:
          getUpdatedAtTime(allTasks?.find((task) => task?.stage === "todo")) || "No data found",
      },
      {
        id: 3,
        title: "Task in progress",
        color: "orange",
        type: "in progress",
        href: "/in-progress",
        value: taskStages["in progress"],
        Icon: RiProgress5Line,
        updatedAt:
          getUpdatedAtTime(allTasks?.find((task) => task?.stage === "in progress")) ||
          "No data found",
      },
      {
        id: 4,
        title: "Completed task",
        color: "green",
        type: "completed",
        href: "/completed",
        value: taskStages?.completed,
        Icon: IoCheckmarkDoneCircle,
        updatedAt:
          getUpdatedAtTime(allTasks?.find((task) => task?.stage === "completed")) ||
          "No data found",
      },
    ],
    [allTasks, last10Task, taskStages, totalTasks],
  );
  return (
    <div className={styles.statsList}>
      {statsCards?.map((card) => (
        <StatsCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Stats;

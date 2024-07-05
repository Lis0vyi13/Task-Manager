import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import Title from "@/ui/Title";

import TaskDetail from "@/components/TaskDetail";
import Tabs from "@/components/Tabs";
import Loader from "@/components/Loader";

import { TbListDetails } from "react-icons/tb";
import { MdTimeline } from "react-icons/md";

import { tasks } from "@/constants";
import styles from "./TaskInfoPage.module.scss";

const TaskInfoPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(1);

  const tabs = useMemo(
    () => [
      {
        id: 1,
        title: "Task detail",
        icon: <TbListDetails />,
        Component: TaskDetail,
      },
      {
        id: 2,
        title: "List view",
        icon: <MdTimeline />,
        Component: TaskDetail,
      },
    ],
    [],
  );

  const tabsData = { data: tabs, activeTab, setActiveTab };

  const task = useMemo(() => tasks.find((t) => t._id === id), [id]);

  const ActiveTabComponent = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.Component,
    [activeTab, tabs],
  );

  return (
    <section className={styles.taskDetail}>
      <Title>{task?.title}</Title>
      <div className={styles.tabs}>
        <Tabs {...tabsData} />
      </div>
      <div className={styles.content}>
        {ActiveTabComponent ? <ActiveTabComponent task={task} /> : <Loader />}
      </div>
    </section>
  );
};

export default TaskInfoPage;

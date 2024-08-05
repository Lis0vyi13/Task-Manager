import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetTaskQuery } from "@/redux/features/tasks/TaskSlice";

import Title from "@/ui/Title";
import Tabs from "@/ui/Tabs";
import Loader from "@/ui/Loader";

import Activities from "@/components/Activities";
import TaskDetails from "@/components/TaskDetails";

import { TbListDetails } from "react-icons/tb";
import { MdTimeline } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import styles from "./TaskInfoPage.module.scss";

const TaskInfoPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const { data } = useGetTaskQuery(id);
  const tabs = useMemo(
    () => [
      {
        id: 1,
        title: "Task details",
        icon: <TbListDetails />,
        Component: TaskDetails,
      },
      {
        id: 2,
        title: "Activities/Timeline",
        icon: <MdTimeline />,
        Component: Activities,
      },
    ],
    [],
  );

  const tabsData = { data: tabs, activeTab, setActiveTab };

  const ActiveTabComponent = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.Component,
    [activeTab, tabs],
  );

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ActiveTabComponent) {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [ActiveTabComponent]);

  return (
    <section className={styles.taskDetail}>
      <div onClick={() => navigate(-1)} className={styles.titleBlock}>
        <IoMdArrowRoundBack className={styles.backIcon} />
        <Title className={styles.title}>{data?.task?.title}</Title>
      </div>
      <div className={styles.tabs}>
        <Tabs {...tabsData} />
      </div>
      <div className={styles.content}>
        {isLoading ? <Loader /> : <ActiveTabComponent task={data?.task} />}
      </div>
    </section>
  );
};

export default TaskInfoPage;

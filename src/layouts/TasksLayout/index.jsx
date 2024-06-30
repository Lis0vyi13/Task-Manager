import { useState } from "react";
import { motion } from "framer-motion";

import Title from "@/ui/Title";

import Tabs from "@/components/Tabs";
import BoardView from "@/components/BoardView";
import ListView from "@/components/ListView";

import { fadeSlideUpVariants, tasks } from "@/constants";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaList } from "react-icons/fa";

import styles from "./TasksLayout.module.scss";

const tasksView = [
  {
    id: 1,
    title: "Board view",
    icon: <RiDashboardHorizontalFill />,
    Component: BoardView,
  },
  { id: 2, title: "List view", icon: <FaList />, Component: ListView },
];

const TasksLayout = ({ title, stage }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className={styles.tasksWrapper}>
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Title>{title}</Title>
      </motion.header>
      <motion.main
        className={styles.main}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          data={tasksView}
        />
        <div className={styles.tasks}>
          {tasksView
            .filter((tab) => tab.id === activeTab)
            .map(({ Component, id }) => (
              <Component key={id} stage={stage} tasks={tasks} />
            ))}
        </div>
      </motion.main>
    </section>
  );
};

export default TasksLayout;

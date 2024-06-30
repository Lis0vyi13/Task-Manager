import { useState } from "react";
import { motion } from "framer-motion";

import Title from "@/ui/Title";
import Button from "@/ui/Button";

import Tabs from "@/components/Tabs";
import BoardView from "./BoardView";
import ListView from "../ListView";

import { fadeSlideUpVariants, tasks } from "@/constants";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaList } from "react-icons/fa";

import styles from "./Tasks.module.scss";

const tasksView = [
  {
    id: 1,
    title: "Board view",
    icon: <RiDashboardHorizontalFill />,
    Component: BoardView,
  },
  { id: 2, title: "List view", icon: <FaList />, Component: ListView },
];

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className={styles.tasksWrapper}>
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Title>Tasks</Title>
        <Button className={styles.button}>+ Create task</Button>
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
              <Component key={id} tasks={tasks} />
            ))}
        </div>
      </motion.main>
    </section>
  );
};

export default Tasks;

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

import Title from "@/ui/Title";
import Button from "@/ui/Button";
import TaskModal from "@/ui/Modals/TaskModal";
import Tabs from "@/ui/Tabs";
import BoardView from "./BoardView";
import ListView from "../ListView";

import { fadeSlideUpVariants } from "@/constants";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaList } from "react-icons/fa";

import styles from "./Tasks.module.scss";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const tasksView = useMemo(
    () => [
      {
        id: 1,
        title: "Board view",
        icon: <RiDashboardHorizontalFill />,
        Component: BoardView,
      },
      { id: 2, title: "List view", icon: <FaList />, Component: ListView },
    ],
    [],
  );

  const ActiveComponent = useMemo(() => {
    return tasksView.find((tab) => tab.id === activeTab)?.Component;
  }, [activeTab, tasksView]);

  const onAddTaskHandler = useCallback(() => {}, []);

  return (
    <section className={styles.tasksWrapper}>
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Title>Tasks</Title>
        <Button onClick={() => setIsTaskModalOpen(true)} className={styles.button}>
          + Create task
        </Button>
      </motion.header>

      {isTaskModalOpen && (
        <TaskModal
          changedValue={isTaskModalOpen}
          className={`${isTaskModalOpen ? "" : styles.hidden} ${styles.addTaskModal}`}
          onSubmit={onAddTaskHandler}
          onClose={() => setIsTaskModalOpen(false)}
        />
      )}

      <motion.main
        className={styles.main}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} data={tasksView} />
        <div className={styles.tasks}>{ActiveComponent ? <ActiveComponent /> : null}</div>
      </motion.main>
    </section>
  );
};

export default Tasks;

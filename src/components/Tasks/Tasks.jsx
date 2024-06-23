import { useState } from "react";
import Title from "@/ui/Title/Title";
import Button from "@/ui/Button/Button";

import Tabs from "../Tabs/Tabs";

import { tasksView, tasks } from "@/constants";

import styles from "./Tasks.module.scss";
import { motion } from "framer-motion";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(1);
  const fadeSlideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
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

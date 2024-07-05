import { useMemo } from "react";
import { motion } from "framer-motion";

import Task from "./Task";
import { fadeSlideUpVariants } from "@/constants";

import styles from "./BoardView.module.scss";

const BoardView = ({ tasks, stage }) => {
  const modifiedTasks = useMemo(
    () => (stage ? tasks.filter((task) => task.stage === stage) : tasks),
    [stage, tasks],
  );

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeSlideUpVariants}
      className={styles.boardView}
    >
      {modifiedTasks.length > 0
        ? modifiedTasks.map((task) => <Task {...task} key={task._id} />)
        : "Tasks not found"}
    </motion.section>
  );
};

export default BoardView;

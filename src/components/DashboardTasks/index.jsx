import { useRef } from "react";

import { motion } from "framer-motion";

import DashboardHead from "./DashboardHead";
import DashboardBody from "./DashboardBody";

import { summary } from "@/constants";

import styles from "./DashboardTasks.module.scss";

const DashboardTasks = () => {
  const tasksRef = useRef();
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      ref={tasksRef}
      className={styles.tasks}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true }}
    >
      <table className={styles.table}>
        <DashboardHead />
        <DashboardBody data={summary.last10Task} />
      </table>
    </motion.section>
  );
};

export default DashboardTasks;

import { useRef } from "react";

import { motion } from "framer-motion";

import DashboardHead from "./DashboardHead";
import DashboardBody from "./DashboardBody";

import { fadeSlideUpVariants } from "@/constants";

import styles from "./DashboardTasks.module.scss";

const DashboardTasks = () => {
  const tasksRef = useRef();

  return (
    <motion.section
      ref={tasksRef}
      className={styles.tasks}
      initial="hidden"
      whileInView="visible"
      variants={fadeSlideUpVariants}
      viewport={{ once: true }}
    >
      <table className={styles.table}>
        <DashboardHead />
        <DashboardBody />
      </table>
    </motion.section>
  );
};

export default DashboardTasks;

import { motion } from "framer-motion";

import Chart from "../Chart";

import { fadeSlideUpVariants } from "@/constants";
import styles from "./PriorityChart.module.scss";

const PriorityChart = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeSlideUpVariants}
      viewport={{ once: true }}
      className={styles.priorityChart}
    >
      <p className={styles.title}>Chart by priority</p>
      <Chart />
    </motion.div>
  );
};

export default PriorityChart;

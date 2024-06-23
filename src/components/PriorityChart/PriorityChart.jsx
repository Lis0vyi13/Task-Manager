import { motion } from "framer-motion";

import Chart from "../Chart/Chart";
import styles from "./PriorityChart.module.scss";

const PriorityChart = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true }}
      className={styles.priorityChart}
    >
      <p className={styles.title}>Chart by priority</p>
      <Chart />
    </motion.div>
  );
};

export default PriorityChart;

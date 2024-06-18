import { useRef } from "react";

import { motion } from "framer-motion";

import TableBody from "./TableBody/TableBody";

import { tasksCategories, tasksData } from "@/constants";

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
        <thead className={styles.thead}>
          <tr className={styles.row}>
            {tasksCategories.map((ctg, i) => (
              <th
                key={ctg}
                className={`${styles.head} ${
                  i === tasksCategories.length - 1 ? styles.createdAt : ""
                }`}
              >
                {ctg}
              </th>
            ))}
          </tr>
        </thead>
        <TableBody data={tasksData} />
      </table>
    </motion.section>
  );
};

export default DashboardTasks;

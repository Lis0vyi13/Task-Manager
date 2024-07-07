import { useMemo } from "react";
import { motion } from "framer-motion";

import useTaskDetailHandler from "@/hooks/useTaskDetailHandler";

import Table from "./Table";

import { fadeSlideUpVariants } from "@/constants";

import styles from "./ListView.module.scss";

const titles = ["Task title", "Priority", "Created At", "Assets", "Team"];

const ListView = ({ tasks, stage }) => {
  const modifiedTasks = useMemo(
    () => (stage ? tasks.filter((task) => task.stage === stage) : tasks),
    [stage, tasks],
  );

  const navigate = useTaskDetailHandler();

  const tableData = useMemo(
    () => ({ modifiedTasks, titles, navigate }),
    [modifiedTasks, navigate],
  );
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeSlideUpVariants}
      className={`${styles.listView} ${
        modifiedTasks.length > 0 ? styles.notEmpty : ""
      }`}
    >
      {modifiedTasks.length > 0 ? (
        <Table {...tableData} />
      ) : (
        <span className={styles.notFound}>Tasks not found</span>
      )}
    </motion.section>
  );
};

export default ListView;

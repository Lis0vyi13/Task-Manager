import { useMemo } from "react";
import { motion } from "framer-motion";
import useTaskDetailHandler from "@/hooks/useTaskDetailHandler";

import Title from "@/ui/Title";

import Table from "./Table";

import { MdDelete, MdRestore } from "react-icons/md";
import { fadeSlideUpVariants } from "@/constants";

import styles from "./Trash.module.scss";

const Trash = ({ tasks }) => {
  const titles = ["Full Name", "Priority", "Stage", "Modified on"];
  const navigate = useTaskDetailHandler();
  const trashedTasks = useMemo(
    () => tasks.filter((task) => !task.isTrashed),
    [tasks],
  );

  const tableData = { titles, navigate, trashedTasks };
  return (
    <section className={styles.trash}>
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Title>Trash</Title>

        <div className={styles.trashActions}>
          <div className={styles.trashAction}>
            <MdRestore className={styles.actionIcon} />
            <p className={styles.actionText}>Restore all</p>
          </div>
          <div className={`${styles.trashAction} ${styles.deleteIcon}`}>
            <MdDelete className={styles.actionIcon} />
            <p className={styles.actionText}>Delete all</p>
          </div>
        </div>
      </motion.header>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
        className={`${styles.listView} ${
          trashedTasks.length > 0 ? styles.notEmpty : ""
        }`}
      >
        {trashedTasks.length > 0 ? <Table {...tableData} /> : "Trash is empty"}
      </motion.section>
    </section>
  );
};

export default Trash;

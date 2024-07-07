import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import useTaskDetailHandler from "@/hooks/useTaskDetailHandler";
import useSearch from "@/hooks/useSearch";

import Title from "@/ui/Title";
import Loader from "@/ui/Loader";

import Table from "./Table";

import { MdDelete, MdRestore } from "react-icons/md";
import { fadeSlideUpVariants } from "@/constants";

import styles from "./Trash.module.scss";

const titles = ["Full Name", "Priority", "Stage", "Modified on"];

const Trash = ({ tasks }) => {
  const [isLoading, setIsLoading] = useState(true);

  const query = useSearch();
  const filteredTask = useMemo(() => {
    setIsLoading(true);

    const trashedTasks = tasks.filter((task) => !task.isTrashed);
    const queryTasks = query
      ? trashedTasks.filter((task) =>
          task?.title?.toLowerCase().includes(query.toLowerCase()),
        )
      : trashedTasks;

    setIsLoading(false);

    return queryTasks;
  }, [query, tasks]);

  const navigate = useTaskDetailHandler();

  const tableData = useMemo(
    () => ({ titles, navigate, filteredTask }),
    [navigate, filteredTask],
  );

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
          filteredTask.length > 0 ? styles.notEmpty : ""
        }`}
      >
        {isLoading ? (
          <Loader />
        ) : filteredTask.length > 0 ? (
          <Table {...tableData} />
        ) : (
          "Trash is empty"
        )}
      </motion.section>
    </section>
  );
};

export default Trash;

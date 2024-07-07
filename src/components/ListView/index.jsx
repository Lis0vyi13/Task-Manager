import { useMemo } from "react";
import { motion } from "framer-motion";

import useTaskDetailHandler from "@/hooks/useTaskDetailHandler";
import useView from "@/hooks/useView";

import Table from "./Table";
import Loader from "@/ui/Loader";

import { fadeSlideUpVariants } from "@/constants";

import styles from "./ListView.module.scss";

const titles = ["Task title", "Priority", "Created At", "Assets", "Team"];

const ListView = ({ tasks, stage }) => {
  const { isLoading, filteredTasks } = useView({ tasks, stage });

  const navigateToTask = useTaskDetailHandler();

  const tableData = useMemo(
    () => ({ filteredTasks, titles, navigateToTask }),
    [filteredTasks, navigateToTask],
  );

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeSlideUpVariants}
      className={`${styles.listView} ${
        filteredTasks.length > 0 ? styles.notEmpty : ""
      }`}
    >
      {isLoading ? (
        <Loader />
      ) : filteredTasks.length > 0 ? (
        <Table {...tableData} />
      ) : (
        <span className={styles.notFound}>Tasks not found</span>
      )}
    </motion.section>
  );
};

export default ListView;

import { motion } from "framer-motion";

import useView from "@/hooks/useView";

import Loader from "@/ui/Loader";
import Task from "./Task";

import { fadeSlideUpVariants } from "@/constants";

import styles from "./BoardView.module.scss";

const BoardView = ({ tasks, stage }) => {
  const { isLoading, filteredTasks } = useView({ tasks, stage });

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeSlideUpVariants}
      className={styles.boardView}
    >
      {isLoading ? (
        <Loader />
      ) : filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <Task task={task} key={task._id} />)
      ) : (
        "Tasks not found"
      )}
    </motion.section>
  );
};

export default BoardView;

import { IoMdAdd } from "react-icons/io";

import styles from "./TasksTitle.module.scss";

const TasksTitle = ({ children, color }) => {
  return (
    <div className={styles.tasksTitle}>
      <div style={{ backgroundColor: color }} className={styles.circle} />
      <p className={styles.title}>{children}</p>
      <IoMdAdd className={styles.icon} />
    </div>
  );
};

export default TasksTitle;

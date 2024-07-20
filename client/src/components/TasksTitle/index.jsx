import { memo } from "react";

import { MdExpandMore, MdExpandLess } from "react-icons/md";

import styles from "./TasksTitle.module.scss";

const TasksTitle = memo(({ color, name, handler, isExpand }) => {
  return (
    <button onClick={handler} className={styles.tasksTitle}>
      <div style={{ backgroundColor: color }} className={styles.circle} />
      <p className={styles.title}>{name}</p>

      {isExpand ? (
        <MdExpandLess className={styles.icon} />
      ) : (
        <MdExpandMore className={styles.icon} />
      )}
    </button>
  );
});

export default TasksTitle;

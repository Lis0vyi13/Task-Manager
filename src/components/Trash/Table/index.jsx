import { useCallback } from "react";
import PriorityIndicator from "@/components/PriorityIndicator";
import StageCircle from "@/components/StageCircle";

import { MdDelete, MdRestore } from "react-icons/md";
import styles from "./Table.module.scss";

const Table = ({ titles, trashedTasks, navigate }) => {
  const onNavigateHandler = useCallback((id) => navigate(id), [navigate]);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {titles.map((title) => (
            <th key={title} className={`${styles.th}`}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {trashedTasks.map((task) => (
          <tr key={task._id} className={styles.tr}>
            <td
              onClick={() => onNavigateHandler(task._id)}
              className={`${styles.td} ${styles.titleWrapper}`}
            >
              <StageCircle stage={task.stage} />
              <h1 className={styles.title}>{task.title}</h1>
            </td>
            <td className={styles.td}>
              <PriorityIndicator withAddition priority={task.priority} />
            </td>
            <td className={styles.td}>
              <p>{task.stage}</p>
            </td>

            <td className={styles.td}>
              <p>{new Date(task.updatedAt).toDateString()}</p>
            </td>
            <td className={`${styles.actions} ${styles.td} `}>
              <MdRestore
                title="Restore"
                className={`${styles.restore} ${styles.actionIcon}`}
              />
              <MdDelete
                title="Delete"
                className={`${styles.delete} ${styles.actionIcon}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

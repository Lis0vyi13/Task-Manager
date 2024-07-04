import { motion } from "framer-motion";

import Title from "@/ui/Title";

import StageCircle from "../StageCircle";
import PriorityIndicator from "../PriorityIndicator";

import { fadeSlideUpVariants } from "@/constants";
import { MdDelete, MdRestore } from "react-icons/md";

import styles from "./Trash.module.scss";

const Trash = ({ tasks }) => {
  const titles = ["Full Name", "Priority", "Stage", "Modified on"];

  const trashedTasks = tasks.filter((task) => !task.isTrashed);
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
        {trashedTasks.length > 0 ? (
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
                  <td className={styles.td}>
                    <div className={styles.team}>
                      <StageCircle stage={task.stage} />
                      <p className={styles.name}>{task.title}</p>
                    </div>
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
        ) : (
          "Trash is empty"
        )}
      </motion.section>
    </section>
  );
};

export default Trash;

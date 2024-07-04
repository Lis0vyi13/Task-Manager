import { motion } from "framer-motion";

import Team from "../Team";
import StageCircle from "../StageCircle";

import { MdAttachFile, MdOutlineComment } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { fadeSlideUpVariants, formatDate } from "@/constants";

import styles from "./ListView.module.scss";
import PriorityIndicator from "../PriorityIndicator";

const ListView = ({ tasks, stage }) => {
  const modifiedTasks = stage
    ? tasks.filter((task) => task.stage === stage)
    : tasks;

  const titles = ["Task title", "Priority", "Created At", "Assets", "Team"];
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
            {modifiedTasks.map((task) => (
              <tr className={styles.tr} key={task._id}>
                <td className={`${styles.tableTitle} ${styles.td}`}>
                  <StageCircle stage={task.stage} />
                  <h1 className={styles.title}>{task.title}</h1>
                </td>
                <td className={`${styles.priority} ${styles.td}`}>
                  <PriorityIndicator withAddition priority={task.priority} />
                </td>
                <td
                  className={`${styles.td} ${styles.createdAt} ${styles.capitalize}`}
                >
                  <span className={styles.daysAgo}>
                    {formatDate(new Date(task.date))}
                  </span>
                </td>
                <td className={`${styles.td} ${styles.details}`}>
                  <article title="Commentary" className={styles.commentary}>
                    <MdOutlineComment />
                    <span>{task.activities.length}</span>
                  </article>
                  <article title="Assets" className={styles.assets}>
                    <MdAttachFile />
                    <span>{task.assets.length}</span>
                  </article>
                  <article title={"Subtasks"} className={styles.subtasks}>
                    <FaList />
                    <span>0/{task.subTasks.length}</span>
                  </article>
                </td>
                <td className={`${styles.td}`}>
                  <Team
                    infoClassName={styles.userInfo}
                    side={"left"}
                    className={styles.team}
                    team={task.team}
                  />
                </td>
                <td className={`${styles.actions} ${styles.td} `}>
                  <button className={styles.editBtn}>Edit</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span className={styles.notFound}>Tasks not found</span>
      )}
    </motion.section>
  );
};

export default ListView;

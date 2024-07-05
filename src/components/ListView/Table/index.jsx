import Team from "@/components/Team";
import PriorityIndicator from "@/components/PriorityIndicator";
import StageCircle from "@/components/StageCircle";

import { FaList } from "react-icons/fa";
import { MdAttachFile, MdOutlineComment } from "react-icons/md";

import { formatDate } from "@/constants";

import styles from "./Table.module.scss";

const Table = ({ modifiedTasks, titles, navigate }) => {
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
        {modifiedTasks.map((task) => (
          <tr className={styles.tr} key={task._id}>
            <td
              onClick={() => navigate(task._id)}
              className={`${styles.tableTitle} ${styles.td}`}
            >
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
  );
};

export default Table;

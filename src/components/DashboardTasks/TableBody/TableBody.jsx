import moment from "moment";

import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import Team from "@/components/Team/Team";

import { TASK_TYPE, PRIOTITY_STYLES, TASK_PRIORITY_ICONS } from "@/constants";

import styles from "./TableBody.module.scss";

const TableBody = ({ data }) => {
  return (
    <tbody className={styles.tbody}>
      {data.map((task, taskIndex) => {
        return (
          <tr key={task._id} className={styles.row}>
            <td className={styles.td}>
              <div
                style={{ backgroundColor: TASK_TYPE[task.stage] }}
                className={styles.circle}
              />
              <h1 className={styles.text}>{task.title}</h1>
            </td>
            <td className={styles.td}>
              <div className={styles.priority}>
                <span style={{ color: PRIOTITY_STYLES[task.priority] }}>
                  {TASK_PRIORITY_ICONS[task.priority]}
                </span>

                <span style={{ lineClamp: 1 }} className={styles.text}>
                  {capitalizeFirstLetter(task.priority)}
                </span>
              </div>
            </td>
            <td className={styles.td}>
              <Team {...task} index={taskIndex} />
            </td>
            <td className={`${styles.td} ${styles.createdAt}`}>
              <span className={styles.daysAgo}>
                {capitalizeFirstLetter(moment(task.createdAt).fromNow())}
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;

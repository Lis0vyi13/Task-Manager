import moment from "moment";

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

import getInitials from "@/utils/getInitials";

import {
  tasksCategories,
  tasksData,
  TASK_TYPE,
  PRIOTITY_STYLES,
  TASK_BGS,
} from "@/constants";

import styles from "./DashboardTasks.module.scss";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const DashboardTasks = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <section className={styles.tasks}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.row}>
            {tasksCategories.map((ctg, i) => (
              <th
                key={ctg}
                className={`${styles.head} ${
                  i === tasksCategories.length - 1 ? styles.createdAt : ""
                }`}
              >
                {ctg}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {tasksData.map((task) => {
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
                      {ICONS[task.priority]}
                    </span>

                    <span style={{ lineClamp: 1 }} className={styles.text}>
                      {capitalizeFirstLetter(task.priority)}
                    </span>
                  </div>
                </td>
                <td className={styles.td}>
                  <div className={styles.team}>
                    {task.team.map((dev, i) => {
                      return (
                        <div
                          title={dev.name}
                          key={dev._id}
                          style={{
                            backgroundColor: TASK_BGS[i % TASK_BGS.length],
                          }}
                          className={styles.avatar}
                        >
                          <span className={styles.initials}>
                            {getInitials(dev.name)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
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
      </table>
    </section>
  );
};

export default DashboardTasks;

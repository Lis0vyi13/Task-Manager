import moment from "moment";

import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import getInitials from "@/utils/getInitials";

import TaskUserInfo from "../TaskUserInfo/TaskUserInfo";

import {
  TASK_TYPE,
  PRIOTITY_STYLES,
  TASK_BGS,
  TASK_PRIORITY_ICONS,
} from "@/constants";

import styles from "./TableBody.module.scss";
import dshStyles from "../DashboardTasks.module.scss";

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
              <div className={styles.team}>
                {task.team.map((dev, i) => {
                  return (
                    <div
                      key={dev._id}
                      style={{
                        backgroundColor: TASK_BGS[i % TASK_BGS.length],
                      }}
                      className={dshStyles.avatar}
                    >
                      <span className={styles.initials}>
                        {getInitials(dev.name)}
                      </span>
                      <div
                        className={`${dshStyles.userInfo} ${
                          taskIndex > 4 ? dshStyles.top : dshStyles.bottom
                        }`}
                      >
                        <TaskUserInfo index={i} {...dev} />
                      </div>
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
  );
};

export default TableBody;

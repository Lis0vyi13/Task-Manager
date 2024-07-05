import moment from "moment";

import useTaskDetailHandler from "@/hooks/useTaskDetailHandler";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import Team from "@/components/Team";
import StageCircle from "@/components/StageCircle";
import PriorityIndicator from "@/components/PriorityIndicator";

import styles from "./DashboardBody.module.scss";

const DashboardBody = ({ data }) => {
  const navigate = useTaskDetailHandler();

  return (
    <tbody className={styles.tbody}>
      {data.map((task, taskIndex) => {
        return (
          <tr key={task._id} className={styles.row}>
            <td
              onClick={() => navigate(task._id)}
              className={`${styles.td} ${styles.pointer}`}
            >
              <StageCircle className={styles.circle} stage={task.stage} />
              <h1 className={styles.text}>{task.title}</h1>
            </td>
            <td className={styles.td}>
              <div className={styles.priority}>
                <PriorityIndicator priority={task.priority} />
              </div>
            </td>
            <td className={styles.td}>
              <Team noPropagation {...task} index={taskIndex} />
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

export default DashboardBody;

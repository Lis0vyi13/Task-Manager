import DashboardTaskItem from "../DashboardTaskItem";

import styles from "./DashboardBody.module.scss";

const DashboardBody = ({ data }) => {
  return (
    <tbody className={styles.tbody}>
      {data.map((task, taskIndex) => {
        return (
          <DashboardTaskItem task={task} taskIndex={taskIndex} key={task._id} />
        );
      })}
    </tbody>
  );
};

export default DashboardBody;

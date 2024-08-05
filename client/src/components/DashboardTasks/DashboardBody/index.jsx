import { useSelector } from "react-redux";
import DashboardTaskItem from "../DashboardTaskItem";

import styles from "./DashboardBody.module.scss";

const DashboardBody = () => {
  const { dashboardStats } = useSelector((store) => store.tasks);
  const last10Task = dashboardStats?.last10Task;

  return (
    <tbody className={styles.tbody}>
      {last10Task?.map((task, taskIndex) => {
        return <DashboardTaskItem task={task} taskIndex={taskIndex} key={task?._id} />;
      })}
    </tbody>
  );
};

export default DashboardBody;

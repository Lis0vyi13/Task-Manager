import Chart from "../Chart/Chart";

import styles from "./PriorityChart.module.scss";

const PriorityChart = () => {
  return (
    <div className={styles.priorityChart}>
      <p className={styles.title}>Chart by priority</p>
      <Chart />
    </div>
  );
};

export default PriorityChart;

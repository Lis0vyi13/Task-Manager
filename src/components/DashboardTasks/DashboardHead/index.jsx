import { tasksHeading } from "@/constants";

import styles from "./DashboardHead.module.scss";

const DashboardHead = () => {
  return (
    <thead className={styles.thead}>
      <tr className={styles.row}>
        {tasksHeading.map((ctg, i) => (
          <th
            key={ctg}
            className={`${styles.head} ${
              i === tasksHeading.length - 1 ? styles.createdAt : ""
            }`}
          >
            {ctg}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DashboardHead;

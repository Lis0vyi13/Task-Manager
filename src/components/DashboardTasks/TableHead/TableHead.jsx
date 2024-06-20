import { tasksHeading } from "@/constants";

import styles from "./TableHead.module.scss";

const TableHead = () => {
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

export default TableHead;

import useBreakpoints from "@/hooks/useBreakpoints";

import { tasksHeading } from "@/constants";
import styles from "./DashboardHead.module.scss";

const DashboardHead = () => {
  const { isDesktop } = useBreakpoints();

  return (
    <thead className={styles.thead}>
      <tr className={styles.row}>
        {isDesktop ? (
          tasksHeading.map((ctg, i) => (
            <th
              key={ctg}
              className={`${styles.head} ${
                i === tasksHeading.length - 1 ? styles.createdAt : ""
              }`}
            >
              {ctg}
            </th>
          ))
        ) : (
          <th className={styles.head}>{tasksHeading[0]}</th>
        )}
      </tr>
    </thead>
  );
};

export default DashboardHead;

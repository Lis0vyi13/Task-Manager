import { developersHeading } from "@/constants";

import styles from "./DevelopersHead.module.scss";

const DevelopersHead = () => {
  return (
    <thead className={styles.developersTableHead}>
      <tr className={styles.row}>
        {developersHeading.map((heading) => (
          <th key={heading} className={styles.heading}>
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DevelopersHead;

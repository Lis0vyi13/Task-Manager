import useBreakpoints from "@/hooks/useBreakpoints";

import { developersHeading } from "@/constants";
import styles from "./DevelopersHead.module.scss";

const DevelopersHead = () => {
  const { isDesktop } = useBreakpoints();

  return (
    <thead className={styles.developersTableHead}>
      <tr className={styles.row}>
        {isDesktop ? (
          developersHeading.map((heading) => (
            <th key={heading} className={styles.heading}>
              {heading}
            </th>
          ))
        ) : (
          <th>{developersHeading[0]}</th>
        )}
      </tr>
    </thead>
  );
};

export default DevelopersHead;

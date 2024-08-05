import { useCallback } from "react";
import useBreakpoints from "@/hooks/useBreakpoints";

import TableItem from "./TableItem";

import styles from "./Table.module.scss";

const Table = ({ titles, filteredTask, navigate }) => {
  const navigateToTask = useCallback((id) => navigate(id), [navigate]);
  const { isDesktop } = useBreakpoints();

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {isDesktop ? (
            titles.map((title) => (
              <th key={title} className={`${styles.th}`}>
                {title}
              </th>
            ))
          ) : (
            <th className={styles.th}>{titles[0]}</th>
          )}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {filteredTask?.map((task) => (
          <TableItem key={task?._id} navigateToTask={navigateToTask} task={task} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import useBreakpoints from "@/hooks/useBreakpoints";

import styles from "./Table.module.scss";
import TableItem from "./TableItem";

const Table = ({ filteredTasks, titles, navigateToTask }) => {
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
        {filteredTasks.map((task) => (
          <TableItem
            key={task?._id}
            task={task}
            navigateToTask={navigateToTask}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

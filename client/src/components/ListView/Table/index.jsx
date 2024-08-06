import { useMediaQuery } from "react-responsive";

import TableItem from "./TableItem";

import styles from "./Table.module.scss";

const Table = ({ filteredTasks, titles, navigateToTask }) => {
  const forMobile = useMediaQuery({ query: "(max-width:1200px)" });

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {!forMobile ? (
            titles.map((title) => (
              <th
                key={title}
                className={`${title === "Created At" ? styles.createdAt : ""} ${styles.th}`}
              >
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
          <TableItem key={task?._id} task={task} navigateToTask={navigateToTask} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

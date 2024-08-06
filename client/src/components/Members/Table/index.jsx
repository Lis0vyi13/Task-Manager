import useBreakpoints from "@/hooks/useBreakpoints";

import styles from "./Table.module.scss";

import MemberItem from "./MemberItem";

const Table = ({ users, titles }) => {
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
            <th className={`${styles.th}`}>Full name</th>
          )}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {users?.map((user, i) => (
          <MemberItem
            isCreator={i === 0}
            isLastUser={i + 1 === users?.length}
            key={user._id}
            user={user}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import Team from "@/components/Team";

import { formatDate } from "@/constants";

import styles from "./Table.module.scss";

const Table = ({ users, titles }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {titles.map((title) => (
            <th key={title} className={`${styles.th}`}>
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {users.map((user) => (
          <tr key={user._id} className={styles.tr}>
            <td className={styles.td}>
              <div className={styles.team}>
                <Team
                  {...user}
                  className={styles.avatar}
                  avatarClassName={styles.avatar}
                  infoClassName={styles.info}
                  side={"right"}
                  team={[user]}
                />
                <p className={styles.name}>{user.name}</p>
              </div>
            </td>
            <td className={styles.td}>
              <p>{user.role}</p>
            </td>
            <td className={styles.td}>
              <p>{user.email}</p>
            </td>
            <td className={styles.td}>
              <div
                style={{
                  backgroundColor: user.isActive ? "#BFDBFE" : "#FEF3C7",
                  color: user.isActive ? "#1D4ED8" : "#000",
                }}
                className={styles.status}
              >
                <p>{user?.isActive ? "Active" : "Disabled"}</p>
              </div>
            </td>
            <td className={styles.td}>
              <p>{formatDate(new Date(user.createdAt))}</p>
            </td>
            <td className={`${styles.actions} ${styles.td} `}>
              <button className={styles.editBtn}>Edit</button>
              <button className={styles.deleteBtn}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

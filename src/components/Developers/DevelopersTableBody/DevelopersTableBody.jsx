import moment from "moment";

import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import Team from "@/components/Team/Team";

import { summary } from "@/constants";

import styles from "./DevelopersTableBody.module.scss";

const DevelopersTableBody = () => {
  return (
    <tbody className={styles.developersTableBody}>
      {summary.users.map((user) => (
        <tr key={user.name + " row"} className={styles.row}>
          <td className={styles.data}>
            <Team
              {...user}
              className={styles.avatar}
              avatarClassName={styles.avatar}
              infoClassName={styles.info}
              team={[user]}
            />
            <div className={styles.userInfo}>
              <p className={styles.name}>{user.name}</p>
              <span className={styles.role}>{user.role}</span>
            </div>
          </td>
          <td className={styles.data}>
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
          <td className={styles.data}>
            <div className={styles.createdAt}>
              <p>{capitalizeFirstLetter(moment(user.createdAt).fromNow())}</p>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DevelopersTableBody;

import moment from "moment";

import getInitials from "@/utils/getInitials";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import { TASK_BGS, summary } from "@/constants";

import styles from "./DevelopersTableBody.module.scss";

const DevelopersTableBody = () => {
  return (
    <tbody className={styles.developersTableBody}>
      {summary.users.map((user, i) => (
        <tr key={user.name + " row"} className={styles.row}>
          <td className={styles.data}>
            <div
              title={user.name}
              key={user._id}
              style={{
                backgroundColor: TASK_BGS[i % TASK_BGS.length],
              }}
              className={styles.avatar}
            >
              <span className={styles.initials}>{getInitials(user.name)}</span>
            </div>
            <div className={styles.userInfo}>
              <p className={styles.name}>{user.name}</p>
              <span className={styles.role}>{user.role}</span>
            </div>
          </td>
          <td className={styles.data}>
            <div
              style={{ backgroundColor: user.isActive ? "#BFDBFE" : "#FEF3C7" }}
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

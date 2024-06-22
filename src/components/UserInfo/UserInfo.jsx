import getInitials from "@/utils/getInitials";

import { TASK_BGS } from "@/constants";

import styles from "./UserInfo.module.scss";

const UserInfo = ({ name, index, title, email, avatar }) => {
  return (
    <div className={`${styles.userInfo}`}>
      <div className={styles.content}>
        <div
          style={{
            backgroundColor: avatar || TASK_BGS[index % TASK_BGS.length],
          }}
          className={styles.avatar}
        >
          <span className={styles.initials}>{getInitials(name)}</span>
        </div>
        <div className={styles.userInfoText}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.role}>{title}</h2>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

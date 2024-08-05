import Team from "@/components/Team";

import styles from "./TeamMember.module.scss";

const TeamMember = ({ user }) => {
  return (
    <div className={styles.member}>
      <Team
        {...user}
        className={styles.avatar}
        avatarClassName={styles.avatar}
        infoClassName={styles.info}
        team={[user]}
      />
      <div className={styles.userInfo}>
        <p className={styles.name}>
          {user.name} {user.surname}
        </p>
        <span className={styles.role}>{user.role}</span>
      </div>
    </div>
  );
};

export default TeamMember;

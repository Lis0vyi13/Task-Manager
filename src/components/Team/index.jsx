import getInitials from "@/utils/getInitials";

import useTeam from "./useTeam";

import UserInfo from "../UserInfo";

import styles from "./Team.module.scss";

const Team = ({
  team,
  index,
  className = "",
  avatarClassName = "",
  infoClassName = "",
  withInfo = true,
}) => {
  const { avatarRefs, userInfoRefs } = useTeam({ team });
  return (
    <div className={`${styles.team} ${className}`}>
      {team.map((dev, i) => (
        <div
          ref={(el) => (avatarRefs.current[i] = el)}
          title={!withInfo ? dev.name : null}
          key={dev._id}
          style={{
            backgroundColor: dev.avatar,
          }}
          className={`${styles.avatar} ${avatarClassName}`}
        >
          <span className={styles.initials}>{getInitials(dev.name)}</span>
          {withInfo && (
            <div
              className={`${styles.userInfo} ${
                infoClassName ||
                (index && index > 4 ? styles.top : styles.bottom)
              }`}
              ref={(el) => (userInfoRefs.current[i] = el)}
            >
              <UserInfo index={i} {...dev} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Team;

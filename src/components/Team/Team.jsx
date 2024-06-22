import getInitials from "@/utils/getInitials";

import useTeam from "./useTeam";

import UserInfo from "../UserInfo/UserInfo";

import { TASK_BGS } from "@/constants";

import styles from "./Team.module.scss";

const Team = ({
  team,
  index,
  className = "",
  avatarClassName = "",
  infoClassName = "",
  style = {},
  avatar,
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
            ...style,
            backgroundColor: avatar || TASK_BGS[i % TASK_BGS.length],
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

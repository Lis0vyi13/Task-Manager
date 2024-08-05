import getInitials from "@/utils/getInitials";
import useTeam from "./useTeam";
import isColorLight from "@/utils/isColorLight";

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
      {team?.map((dev, i) => {
        const color = isColorLight(dev?.avatarColor) ? "#000" : "#fff";
        return (
          <div
            ref={(el) => (avatarRefs.current[i] = el)}
            title={!withInfo ? dev.name : null}
            key={dev._id}
            style={{
              backgroundColor: dev?.avatar ? "" : dev.avatarColor,
              color,
            }}
            className={`${styles.avatar} ${avatarClassName}`}
          >
            {dev?.avatar ? (
              <div className={styles.avatarImg}>
                <img src={dev?.avatar} alt="user avatar" />
              </div>
            ) : (
              <p className={styles.initials}>{getInitials(dev?.name, dev?.surname)}</p>
            )}

            {withInfo && (
              <div
                className={`${styles.userInfo} ${
                  infoClassName || (index && index > 4 ? styles.top : styles.bottom)
                }`}
                ref={(el) => (userInfoRefs.current[i] = el)}
              >
                <UserInfo color={color} index={i} {...dev} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Team;

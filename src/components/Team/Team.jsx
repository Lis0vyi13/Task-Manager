import getInitials from "@/utils/getInitials";

import TaskUserInfo from "../UserInfo/UserInfo";

import { TASK_BGS } from "@/constants";

import styles from "./Team.module.scss";

const Team = ({
  team,
  index,
  className,
  avatarClassName,
  infoClassName,
  style,
  withInfo = true,
}) => {
  return (
    <div className={`${styles.team} ${className}`}>
      {team.map((dev, i) => {
        return (
          <div
            title={withInfo ? null : dev.name}
            key={dev._id}
            style={
              style || {
                backgroundColor: TASK_BGS[i % TASK_BGS.length],
              }
            }
            className={`${styles.avatar} ${avatarClassName}`}
          >
            <span className={styles.initials}>{getInitials(dev.name)}</span>
            {withInfo && (
              <div
                className={`${styles.userInfo}
                 ${
                   infoClassName
                     ? infoClassName
                     : index && index > 4
                     ? styles.top
                     : styles.bottom
                 }`}
              >
                <TaskUserInfo index={index || i} {...dev} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Team;

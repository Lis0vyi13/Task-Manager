import { memo } from "react";
import moment from "moment";

import TASK_TYPE_ICON from "@/components/TaskTypeIcon";

import styles from "./Activity.module.scss";

const Activity = memo(({ activity }) => {
  return (
    <div className={styles.activity}>
      <div className={styles.iconBlock}>
        <div className={styles.icon}>
          {TASK_TYPE_ICON[activity.type]}
          {(activity?.type === "assigned" || activity?.type === "commented") && (
            <div style={{ backgroundColor: activity?.by?.avatarColor }} className={styles.avatar}>
              <img src={activity?.by?.avatar} alt="user avatar" />
            </div>
          )}
        </div>
        <div className={styles.lineBlock}>
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.username}>
          {activity?.by?.name} {activity?.by.surname}
        </h3>
        <div className={styles.typeDateBlock}>
          <span className={styles.type}>{activity.type}</span>
          <span className={styles.date}>{moment(activity.date).fromNow()}</span>
        </div>
        <p className={styles.activityText}>{activity.activity}</p>
      </div>
    </div>
  );
});

export default Activity;

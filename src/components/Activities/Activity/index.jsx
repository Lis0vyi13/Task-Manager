import moment from "moment";

import TASK_TYPE_ICON from "@/components/TaskTypeIcon";

import { summary } from "@/constants";
import styles from "./Activity.module.scss";

const Activity = ({ activity }) => {
  return (
    <div className={styles.activity}>
      <div className={styles.iconBlock}>
        <div className={styles.icon}>{TASK_TYPE_ICON[activity.type]}</div>
        <div className={styles.lineBlock}>
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.username}>
          {summary.users.find((user) => user._id === activity.by).name}
        </h3>
        <div className={styles.typeDateBlock}>
          <span className={styles.type}>{activity.type}</span>
          <span className={styles.date}>{moment(activity.date).fromNow()}</span>
        </div>
        <h1 className={styles.activityText}>{activity.activity}</h1>
      </div>
    </div>
  );
};

export default Activity;

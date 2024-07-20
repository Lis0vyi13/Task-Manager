import { memo, useMemo } from "react";
import moment from "moment";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import { LuBellRing } from "react-icons/lu";
import styles from "./Alert.module.scss";

const Alert = memo(({ text, createdAt }) => {
  const relativeTime = useMemo(
    () => capitalizeFirstLetter(moment(createdAt).fromNow()),
    [createdAt],
  );

  return (
    <div className={styles.alert}>
      <div className={styles.icon}>
        <LuBellRing />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <h4 className={styles.title}>Alert</h4>
          <span className={styles.daysAgo}>{relativeTime}</span>
        </div>
        <p title={text} className={styles.description}>
          {text}
        </p>
      </div>
    </div>
  );
});

export default Alert;

import moment from "moment";

import { LuBellRing } from "react-icons/lu";

import styles from "./Alert.module.scss";

const Alert = ({ text, createdAt }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const relativeTime = capitalizeFirstLetter(moment(createdAt).fromNow());

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
};

export default Alert;

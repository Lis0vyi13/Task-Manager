import moment from "moment/moment";

import styles from "./DashboardCard.module.scss";

const DashboardCard = ({ createdAt, Icon, title, amount, color }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const relativeTime = capitalizeFirstLetter(moment(createdAt).fromNow());

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.amount}>{amount}</h3>
      <span className={styles.daysAgo}>{relativeTime}</span>

      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
        <div style={{ backgroundColor: color }} className={styles.circle} />
      </div>
    </div>
  );
};

export default DashboardCard;

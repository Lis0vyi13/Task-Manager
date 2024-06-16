import moment from "moment/moment";
import { motion } from "framer-motion";

import styles from "./DashboardCard.module.scss";

const DashboardCard = ({ createdAt, Icon, title, amount, color }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const relativeTime = capitalizeFirstLetter(moment(createdAt).fromNow());

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.amount}>{amount}</h3>
      <span className={styles.daysAgo}>{relativeTime}</span>

      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
        <div style={{ backgroundColor: color }} className={styles.circle} />
      </div>
    </motion.div>
  );
};

export default DashboardCard;

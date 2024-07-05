import moment from "moment/moment";
import { motion } from "framer-motion";

import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import { fadeSlideUpVariants } from "@/constants";
import styles from "./StatsCard.module.scss";

const StatsCard = ({ createdAt, Icon, title, amount, color }) => {
  const relativeTime = capitalizeFirstLetter(moment(createdAt).fromNow());

  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      animate="visible"
      variants={fadeSlideUpVariants}
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

export default StatsCard;

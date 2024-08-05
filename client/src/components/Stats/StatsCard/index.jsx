import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { fadeSlideUpVariants } from "@/constants";
import styles from "./StatsCard.module.scss";

const StatsCard = ({ href, title, Icon, updatedAt, color, value }) => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className={styles.card}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
        onClick={() => navigate(href)}
      >
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.amount}>{value}</h3>
        <span className={styles.daysAgo}>{updatedAt}</span>

        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
          <div style={{ backgroundColor: color }} className={styles.circle} />
        </div>
      </motion.div>
    </>
  );
};

export default StatsCard;

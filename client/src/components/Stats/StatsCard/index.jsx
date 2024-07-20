import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { motion } from "framer-motion";

import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import { fadeSlideUpVariants, tasks } from "@/constants";
import styles from "./StatsCard.module.scss";

const StatsCard = ({ createdAt, Icon, title, type, href, color }) => {
  const relativeTime = useMemo(
    () => capitalizeFirstLetter(moment(createdAt).fromNow()),
    [createdAt],
  );
  const navigate = useNavigate();
  const amount = useMemo(
    () =>
      tasks.reduce(
        (acc, task) => {
          acc[task.stage] += 1;
          return acc;
        },
        { todo: 0, "in progress": 0, completed: 0 },
      ),
    [],
  );

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
        <h3 className={styles.amount}>
          {type === "all" ? tasks.length : amount[type]}
        </h3>
        <span className={styles.daysAgo}>{relativeTime}</span>

        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
          <div style={{ backgroundColor: color }} className={styles.circle} />
        </div>
      </motion.div>
    </>
  );
};

export default StatsCard;

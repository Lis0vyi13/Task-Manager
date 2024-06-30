import { formatDate } from "@/constants";
import styles from "./Subtask.module.scss";

const Subtask = ({ title, date, tag, index }) => {
  return (
    <article className={styles.subtask}>
      <p className={styles.title}>
        {index + 1 + ") "}
        {title}
      </p>
      <div className={styles.dateTagContainer}>
        <span className={styles.date}>{formatDate(new Date(date))}</span>
        <span className={styles.tag}>{tag}</span>
      </div>
    </article>
  );
};

export default Subtask;

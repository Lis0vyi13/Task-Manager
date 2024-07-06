import { MdTaskAlt } from "react-icons/md";

import styles from "./Subtask.module.scss";

const Subtask = ({ title, date, tag, done }) => {
  const doneHandler = () => {};
  return (
    <div className={styles.subtask}>
      <div className={styles.subtaskIcon}>
        <MdTaskAlt style={{ color: "rgb(124,58,237)" }} size={26} />
      </div>
      <div className={styles.subtaskInfo}>
        <header className={styles.header}>
          <span className={styles.date}>{new Date(date).toDateString()}</span>
          <span className={styles.tag}>{tag}</span>
          {done && (
            <span className={`${styles.doneTag} ${styles.tag}`}>Done</span>
          )}
        </header>
        <main className={styles.main}>
          <p className={styles.subtaskTitle}>{title}</p>
        </main>
        <footer className={styles.footer}>
          <button
            onClick={doneHandler}
            className={`${done ? styles.undone : styles.done} ${styles.button}`}
          >
            {done ? "Mark as Undone" : "Mark as Done"}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Subtask;

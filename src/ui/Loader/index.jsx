import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.dotsContainer}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default Loader;

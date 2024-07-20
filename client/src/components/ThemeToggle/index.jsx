import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className={styles.toggleButton} onClick={toggleTheme}>
      <div
        className={`${styles.iconWrapper} ${
          theme === "dark" ? styles.moonAnimation : styles.sunAnimation
        }`}
      >
        {theme === "dark" ? (
          <FaMoon className={`${styles.icon} ${styles.dark}`} />
        ) : (
          <FaSun className={`${styles.icon}`} />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;

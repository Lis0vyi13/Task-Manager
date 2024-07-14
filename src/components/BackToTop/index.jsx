import { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTop.module.scss";

const BackToTop = ({ main }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (main.current.scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [main]);

  const scrollToTop = () => {
    main.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const currentMain = main.current;
    currentMain.addEventListener("scroll", toggleVisibility);
    return () => {
      currentMain.removeEventListener("scroll", toggleVisibility);
    };
  }, [main, toggleVisibility]);

  return (
    <div className={`${styles.backToTop} ${isVisible ? "" : styles.hidden}`}>
      <button onClick={scrollToTop} className={styles.backToTopButton}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BackToTop;

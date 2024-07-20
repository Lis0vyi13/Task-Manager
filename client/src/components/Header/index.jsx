import { useCallback } from "react";
import { useSelector } from "react-redux";
import useHeader from "./useHeader";
import useActions from "@/hooks/useActions";

import UserAvatar from "./UserAvatar";
import SearchInput from "./SearchInput";
import Notification from "./Notification";
import ThemeToggle from "../ThemeToggle";

import styles from "./Header.module.scss";

const Header = () => {
  const {
    isMobileSidebarOpen,
    toggleMobileSidebar,
    isSearchVisible,
    register,
    watch,
    handleReset,
  } = useHeader();
  const { theme } = useSelector((state) => state.page);
  const { setTheme } = useActions();

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    document.body.classList.toggle("dark");
  }, [setTheme, theme]);

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        {!isMobileSidebarOpen && (
          <button
            onClick={() => toggleMobileSidebar()}
            className={styles.burger}
          >
            ≡
          </button>
        )}
        {isSearchVisible && (
          <SearchInput
            register={register}
            watch={watch}
            handleReset={handleReset}
          />
        )}
      </div>
      <div className={styles.rightSide}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Notification />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;

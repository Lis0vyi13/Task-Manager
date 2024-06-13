import { useEffect } from "react";
import { useForm } from "react-hook-form";

import useDebounce from "@/hooks/useDebounce";
import useActions from "@/hooks/useActions";

import UserAvatar from "../UserAvatar/UserAvatar";

import { CiSearch } from "react-icons/ci";
import { IoMdClose, IoIosNotificationsOutline } from "react-icons/io";

import styles from "./Header.module.scss";

const Header = () => {
  const { register, reset, watch } = useForm({ mode: "onChange" });
  const debouncedSearchValue = useDebounce(watch("searchQuery"), 500);
  const { toggleSidebar } = useActions();

  const handleReset = () => {
    reset({ searchQuery: "" });
  };

  useEffect(() => {
    if (debouncedSearchValue) {
      console.log("Search Query:", debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <button onClick={() => toggleSidebar()} className={styles.burger}>
          ≡
        </button>
        <div className={styles.search}>
          <CiSearch className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            {...register("searchQuery")}
            placeholder="Search..."
          />
          <IoMdClose onClick={handleReset} className={styles.resetInput} />
        </div>
      </div>
      <div className={styles.rigthSide}>
        <div className={styles.notification}>
          <IoIosNotificationsOutline className={styles.notificationButton} />
          <div className={styles.notificationAmount}>2</div>
        </div>
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;

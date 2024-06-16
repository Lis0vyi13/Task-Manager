import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import useDebounce from "@/hooks/useDebounce";
import useActions from "@/hooks/useActions";

import UserAvatar from "./UserAvatar/UserAvatar";
import SearchInput from "./SearchInput/SearchInput";
import Notification from "./Notification/Notification";

import styles from "./Header.module.scss";

const Header = () => {
  const { register, reset, watch } = useForm({ mode: "onChange" });
  const debouncedSearchValue = useDebounce(watch("searchQuery"), 500);
  const { toggleSidebar } = useActions();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

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
        {!isSidebarOpen && (
          <button onClick={() => toggleSidebar()} className={styles.burger}>
            ≡
          </button>
        )}

        <SearchInput
          register={register}
          watch={watch}
          handleReset={handleReset}
        />
      </div>
      <div className={styles.rigthSide}>
        <Notification />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;

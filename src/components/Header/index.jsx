import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import useDebounce from "@/hooks/useDebounce";
import useActions from "@/hooks/useActions";

import UserAvatar from "./UserAvatar";
import SearchInput from "./SearchInput";
import Notification from "./Notification";

import styles from "./Header.module.scss";

const Header = () => {
  const { register, reset, watch } = useForm({ mode: "onChange" });
  const debouncedSearchValue = useDebounce(watch("searchQuery"), 500);
  const { toggleMobileSidebar } = useActions();
  const isMobileSidebarOpen = useSelector(
    (state) => state.sidebar.isMobileSidebarOpen,
  );

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
        {!isMobileSidebarOpen && (
          <button
            onClick={() => toggleMobileSidebar()}
            className={styles.burger}
          >
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

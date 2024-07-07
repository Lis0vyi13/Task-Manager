import useHeader from "./useHeader";

import UserAvatar from "./UserAvatar";
import SearchInput from "./SearchInput";
import Notification from "./Notification";

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
      <div className={styles.rigthSide}>
        <Notification />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;

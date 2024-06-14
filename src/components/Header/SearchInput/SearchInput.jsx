import { memo } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import styles from "./SearchInput.module.scss";

const SearchInput = memo(({ register, handleReset }) => {
  return (
    <div className={styles.search}>
      <CiSearch className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        {...register("searchQuery")}
        placeholder="Search..."
      />
      <IoMdClose onClick={handleReset} className={styles.resetInput} />
    </div>
  );
});

export default SearchInput;

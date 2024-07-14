import { IoIosMore } from "react-icons/io";
import styles from "./More.module.scss";

const More = ({ onClick }) => {
  return (
    <span onClick={onClick} className={styles.more}>
      <IoIosMore />
    </span>
  );
};

export default More;

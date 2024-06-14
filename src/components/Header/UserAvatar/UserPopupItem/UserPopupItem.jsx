import { Link } from "react-router-dom";

import styles from "./UserPopupItem.module.scss";
import useActions from "@/hooks/useActions";

const UserPopupItem = ({ type, color, name, to, Icon }) => {
  const { logOut } = useActions();

  if (type === "button") {
    return (
      <button
        onClick={() => logOut()}
        style={{ color: color || "inherit" }}
        className={`${styles.popupItem} ${color ? styles.popupRedItem : ""}`}
      >
        <Icon className={styles.icon} />
        <p>{name}</p>
      </button>
    );
  }

  return (
    <Link
      to={to}
      style={{ color: color || "inherit" }}
      className={`${styles.popupItem} ${color ? styles.popupRedItem : ""}`}
    >
      <Icon className={styles.icon} />
      <p>{name}</p>
    </Link>
  );
};

export default UserPopupItem;

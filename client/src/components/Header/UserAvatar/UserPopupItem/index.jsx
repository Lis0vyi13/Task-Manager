import { memo } from "react";

import styles from "./UserPopupItem.module.scss";

const UserPopupItem = memo(({ color, name, handler, Icon }) => {
  return (
    <button
      onClick={handler}
      style={{ color: color || "inherit" }}
      className={`${styles.popupItem} ${color ? styles.popupRedItem : ""}`}
    >
      <Icon className={styles.icon} />
      <p>{name}</p>
    </button>
  );
});

export default UserPopupItem;

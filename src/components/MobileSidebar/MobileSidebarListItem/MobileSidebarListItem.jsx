import { NavLink } from "react-router-dom";

import styles from "./MobileSidebarListItem.module.scss";

const MobileSidebarListItem = ({ to, Icon, name, handler }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.listLink} ${isActive ? styles.activeLink : ""}`
      }
      onClick={handler}
      to={to}
    >
      <li className={styles.listItem}>
        {<Icon className={styles.icon} />}
        {name}
      </li>
    </NavLink>
  );
};

export default MobileSidebarListItem;

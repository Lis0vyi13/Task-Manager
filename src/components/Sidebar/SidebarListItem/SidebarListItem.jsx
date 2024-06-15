import { NavLink } from "react-router-dom";

import styles from "./SidebarListItem.module.scss";

const SidebarListItem = ({ to, Icon, name, handler }) => {
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

export default SidebarListItem;

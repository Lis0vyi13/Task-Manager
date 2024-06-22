import { NavLink } from "react-router-dom";

import styles from "./DesktopSidebarListItem.module.scss";

const DesktopSidebarListItem = ({ to, Icon, name, isSidebarOpen }) => {
  return (
    <NavLink
      title={name}
      className={({ isActive }) =>
        `${styles.listLink} ${isActive ? styles.activeLink : ""} ${
          !isSidebarOpen ? styles.minActiveLink : ""
        }`
      }
      to={to}
    >
      <li className={styles.listItem}>
        {<Icon className={styles.icon} />}
        {isSidebarOpen && name}
      </li>
    </NavLink>
  );
};
export default DesktopSidebarListItem;

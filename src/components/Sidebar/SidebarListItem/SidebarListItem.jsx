import { NavLink } from "react-router-dom";

import useActions from "@/hooks/useActions";

import styles from "./SidebarListItem.module.scss";

const SidebarListItem = ({ to, Icon, name }) => {
  const { toggleSidebar } = useActions();

  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.listLink} ${isActive ? styles.activeLink : ""}`
      }
      onClick={() => toggleSidebar()}
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

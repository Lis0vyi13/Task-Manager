import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../../constants";

import taskLogo from "/task-logo.png";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Link className={styles.logo} to="/dashboard">
          <img width={48} height={48} src={taskLogo} alt="task logo" />
          <h1 className={styles.title}>TaskFlow</h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `${styles.listLink} ${isActive ? styles.activeLink : ""}`
              }
              key={link.name}
              to={link.to}
            >
              <li className={styles.listItem}>
                {<link.img className={styles.icon} />}
                {link.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useActions from "@/hooks/useActions";

import SidebarListItem from "./SidebarListItem/SidebarListItem";

import { navLinks } from "@/constants";

import { IoMdClose } from "react-icons/io";
import taskLogo from "/task-logo.png";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const { toggleSidebar } = useActions();

  return (
    <aside
      className={`${styles.sidebar} ${
        isSidebarOpen ? styles.sidebarHidden : ""
      }`}
    >
      <div className={styles.logo}>
        <Link className={styles.logo} to="/dashboard">
          <img width={48} height={48} src={taskLogo} alt="task logo" />
          <h1 className={styles.title}>TaskFlow</h1>
        </Link>
        <IoMdClose
          onClick={() => toggleSidebar()}
          className={styles.closeSidebar}
        />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <SidebarListItem key={link.name} {...link} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

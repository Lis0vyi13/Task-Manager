import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useActions from "@/hooks/useActions";

import DesktopSidebarListItem from "./DesktopSidebarListItem";

import taskLogo from "/task-logo.png";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { navLinks } from "@/constants";

import styles from "./DesktopSidebar.module.scss";

const DesktopSidebar = () => {
  const isDesktopSidebarOpen = useSelector(
    (state) => state.sidebar.isDesktopSidebarOpen,
  );
  const { toggleDesktopSidebar } = useActions();

  return (
    <aside
      className={`${styles.sidebar}  ${
        !isDesktopSidebarOpen ? styles.minSidebar : ""
      }`}
    >
      <div onClick={() => toggleDesktopSidebar()} className={styles.unfold}>
        {isDesktopSidebarOpen ? <SlArrowLeft /> : <SlArrowRight />}
      </div>

      <div className={styles.logo}>
        <Link className={styles.logo} to="/dashboard">
          <img width={48} height={48} src={taskLogo} alt="task logo" />
          {isDesktopSidebarOpen && <h1 className={styles.title}>TaskFlow</h1>}
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <DesktopSidebarListItem
              isSidebarOpen={isDesktopSidebarOpen}
              key={link.name}
              {...link}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default DesktopSidebar;

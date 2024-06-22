import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import DesktopSidebarListItem from "./DesktopSidebarListItem/DesktopSidebarListItem";

import { navLinks } from "@/constants";

import taskLogo from "/task-logo.png";
import { IoMdClose } from "react-icons/io";

import styles from "./DesktopSidebar.module.scss";

const DesktopSidebar = forwardRef((_, ref) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <aside
      ref={ref}
      className={`${styles.sidebar}  ${
        !isSidebarOpen ? styles.minSidebar : ""
      }`}
    >
      <div className={styles.logo}>
        <Link className={styles.logo} to="/dashboard">
          <img width={48} height={48} src={taskLogo} alt="task logo" />
          {isSidebarOpen && <h1 className={styles.title}>TaskFlow</h1>}
        </Link>
        {isSidebarOpen ? (
          <IoMdClose
            className={styles.close}
            onClick={() => setIsSidebarOpen((state) => !state)}
          />
        ) : (
          <button
            onClick={() => setIsSidebarOpen((state) => !state)}
            className={styles.burger}
          >
            ≡
          </button>
        )}
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <DesktopSidebarListItem
              isSidebarOpen={isSidebarOpen}
              key={link.name}
              {...link}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
});

export default DesktopSidebar;

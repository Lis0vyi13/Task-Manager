import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useOutsideClick from "@/hooks/useOutsideClick";
import useActions from "@/hooks/useActions";

import MobileSidebarListItem from "./MobileSidebarListItem/MobileSidebarListItem";

import { navLinks } from "@/constants";

import { IoMdClose } from "react-icons/io";
import taskLogo from "/task-logo.png";

import styles from "./MobileSidebar.module.scss";

const MobileSidebar = forwardRef((_, ref) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const { toggleSidebar } = useActions();

  const handlerSidebar = () => {
    if (isSidebarOpen) toggleSidebar();
  };

  useOutsideClick(ref, handlerSidebar);

  return (
    <aside
      ref={ref}
      className={`${styles.sidebar} ${
        isSidebarOpen ? "" : styles.sidebarHidden
      }`}
    >
      <div className={styles.logo}>
        <Link onClick={handlerSidebar} className={styles.logo} to="/dashboard">
          <img width={48} height={48} src={taskLogo} alt="task logo" />
          <h1 className={styles.title}>TaskFlow</h1>
        </Link>
        <IoMdClose onClick={handlerSidebar} className={styles.closeSidebar} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navLinks.map((link) => (
            <MobileSidebarListItem
              handler={handlerSidebar}
              key={link.name}
              {...link}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
});

export default MobileSidebar;

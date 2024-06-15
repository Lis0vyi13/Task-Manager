import { useEffect, useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

import styles from "./Layout.module.scss";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.user);
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const sidebarRef = useRef();
  const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width;

  useEffect(() => {
    document.documentElement.style.setProperty("--offset", sidebarWidth + "px");
  }, [sidebarWidth]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section className={`${styles.layout}`}>
      <Sidebar ref={sidebarRef} />
      <div
        className={`${styles.content} ${
          isSidebarOpen ? styles.contentOffset : ""
        }`}
      >
        <Header />
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;

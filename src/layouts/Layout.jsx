import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import useLayout from "./useLayout";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import Loader from "@/components/Loader/Loader";

import styles from "./Layout.module.scss";

const Layout = () => {
  const { isLoggedIn, sidebarRef, isSidebarOpen } = useLayout();

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
        <main className={styles.main}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </section>
  );
};

export default Layout;

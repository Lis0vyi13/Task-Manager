import { Suspense, useRef } from "react";

import { Navigate, Outlet } from "react-router-dom";

import useLayout from "./useLayout";

import Loader from "@/ui/Loader";
import MobileSidebar from "@/components/MobileSidebar";
import DesktopSidebar from "@/components/DesktopSidebar";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

import styles from "./Layout.module.scss";

const Layout = () => {
  const mainRef = useRef(null);
  const { isLoggedIn, sidebarRef, isMobileSidebarOpen } = useLayout();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section className={`${styles.layout}`}>
      <MobileSidebar ref={sidebarRef} />
      <DesktopSidebar />
      <div
        className={`${styles.content} ${
          isMobileSidebarOpen ? styles.contentOffset : ""
        }`}
      >
        <Header />
        <main ref={mainRef} className={styles.main}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <BackToTop main={mainRef} />
      </div>
    </section>
  );
};

export default Layout;

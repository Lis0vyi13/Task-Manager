import { Suspense } from "react";

import { Navigate, Outlet } from "react-router-dom";

import useLayout from "./useLayout";

import MobileSidebar from "@/components/MobileSidebar";
import DesktopSidebar from "@/components/DesktopSidebar";
import Header from "@/components/Header";
import Loader from "@/ui/Loader";

import styles from "./Layout.module.scss";

const Layout = () => {
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

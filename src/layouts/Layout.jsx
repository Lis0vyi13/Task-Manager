import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

import styles from "./Layout.module.scss";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.user);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section className={`${styles.layout}`}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./Layout.module.scss";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.user);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section className={styles.layout}>
      <Sidebar />
      <div style={{ padding: 20 }} className="content">
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;

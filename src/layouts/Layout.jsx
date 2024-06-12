import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.login);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Layout;

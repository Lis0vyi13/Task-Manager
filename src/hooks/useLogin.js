import { useSelector } from "react-redux";

const useLogin = () => {
  const isLoggedIn = useSelector((state) => state.login);
  return isLoggedIn;
};

export default useLogin;

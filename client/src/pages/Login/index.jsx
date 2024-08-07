import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useActions from "@/hooks/useActions";

import useAuth from "@/hooks/useAuth";
import useBreakpoints from "@/hooks/useBreakpoints";

import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";
import Circle from "@/components/Circle";

import styles from "./LoginPage.module.scss";
import { getCookie } from "@/utils/getCookie";

const LoginPage = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  const { isDesktop } = useBreakpoints();
  const [isSignUp, setIsSignUp] = useState(false);
  const { checkAuth } = useActions();

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [navigate, isLoggedIn]);

  useEffect(() => {
    const checkCookies = () => {
      checkAuth();
      console.log(getCookie("__l"), getCookie("__u"), isLoggedIn);
    };

    const interval = setInterval(checkCookies, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [checkAuth, isLoggedIn]);

  const handleSignInClick = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <section className="login">
      <Container>
        <div className={`${styles.loginContent} ${isSignUp && isDesktop ? styles.moveLeft : ""}`}>
          <div className={styles.leftSide}>
            <p className={styles.slogan}>Organize your work effortlessly!</p>
            <h1 className={styles.title}>Efficient Task Management Tool</h1>
            <Circle />
          </div>
          <div className={styles.loginFormContainer}>
            <LoginForm isSignUp={isSignUp} onSignInClick={handleSignInClick} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;

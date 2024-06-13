import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import Container from "@/components/Container/Container";
import LoginForm from "@/components/LoginForm/LoginForm";
import Circle from "@/components/Circle/Circle";

import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/");
  }, [navigate, user]);

  return (
    <section className="login">
      <Container>
        <div className={styles.loginContent}>
          <div className={styles.leftSide}>
            <p className={styles.slogan}>Organize your work effortlessly!</p>
            <h1 className={styles.title}>Efficient Task Management Tool</h1>
            <Circle />
          </div>
          <LoginForm />
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;

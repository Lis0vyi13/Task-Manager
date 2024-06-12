import Container from "../../components/container/Container";
import LoginForm from "../../components/loginForm/LoginForm";

import styles from "./LoginPage.module.scss";
import "./Circle.scss";

const LoginPage = () => {
  return (
    <section className="login">
      <Container>
        <div className={styles.loginContent}>
          <div className={styles.leftSide}>
            <p className={styles.slogan}>Organize your work effortlessly!</p>
            <h1 className={styles.title}>Efficient Task Management Tool</h1>
            <div className="circles-wrapper">
              <div className="circle circle-lg">
                <div className="circle circle-md">
                  <div className="circle circle-sm"></div>
                </div>
              </div>
            </div>
          </div>
          <LoginForm />
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;

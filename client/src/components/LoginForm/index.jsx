import useLogin from "./useLogin";

import Button from "@/ui/Button";

import { loginInputs, signUpInputs } from "@/constants";

import styles from "./LoginForm.module.scss";
import InputField from "@/ui/Inputs/InputField";

const LoginForm = ({ isSignUp, onSignInClick }) => {
  const { handleSubmit, onSubmit, control, isLoading } = useLogin({
    isSignUp,
  });

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormContent}>
        <h2 className={styles.hello}>{isSignUp ? "Sign Up" : "Welcome back!"}</h2>
        <p className={styles.slogan}>Access your tasks securely!</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {isSignUp &&
            signUpInputs.map((input, index) => (
              <div key={index} className={styles.inputWrapper}>
                <InputField {...input} control={control} />
              </div>
            ))}

          {loginInputs.map((input, index) => (
            <div className={styles.inputWrapper} key={index}>
              <InputField {...input} control={control} />
            </div>
          ))}

          <p className={styles.signInBlock}>
            {isSignUp ? "Already have an account? " : "Don’t have an account? "}
            <span onClick={onSignInClick} className={styles.signIn}>
              {isSignUp ? "Sign in" : "Sign up"}
            </span>
          </p>
          <Button disabled={isLoading} className={styles.button} type="submit">
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

import useLogin from "./useLogin";

import Input from "@/ui/Inputs";
import Button from "@/ui/Button";

import { loginInputs, signUpInputs } from "@/constants";

import styles from "./LoginForm.module.scss";

const LoginForm = ({ isSignUp, onSignInClick }) => {
  const { handleSubmit, onSubmit, register, errors } = useLogin();

  console.log(isSignUp);
  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormContent}>
        <h2 className={styles.hello}>
          {isSignUp ? "Sign Up" : "Welcome back!"}
        </h2>
        <p className={styles.slogan}>Access your tasks securely!</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {isSignUp &&
            signUpInputs.map((input, index) => (
              <div key={index} className={styles.inputWrapper}>
                <Input {...input} register={register} />
                {errors[input.name] && (
                  <span className={styles.error}>
                    {errors[input.name].message}
                  </span>
                )}
              </div>
            ))}

          {loginInputs.map((input, index) => (
            <div className={styles.inputWrapper} key={index}>
              <Input {...input} register={register} />
              {errors[input.name] && (
                <span className={styles.error}>
                  {errors[input.name].message}
                </span>
              )}
            </div>
          ))}

          <span
            onClick={(e) => e.preventDefault()}
            className={styles.forgotPassword}
          >
            Forget Password?
          </span>
          <p className={styles.signInBlock}>
            {isSignUp ? "Already have an account? " : "Don’t have an account? "}
            <span onClick={onSignInClick} className={styles.signIn}>
              {isSignUp ? "Sign in" : "Sign up"}
            </span>
          </p>
          <Button className={styles.button} type="submit">
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

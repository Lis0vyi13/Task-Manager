import useLogin from "./useLogin";

import Input from "@/ui/Inputs";
import Button from "@/ui/Button";

import { loginInputs } from "@/constants";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const { handleSubmit, onSubmit, register, errors } = useLogin();

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormContent}>
        <h2 className={styles.hello}>Welcome back!</h2>
        <p className={styles.slogan}>Access your tasks securely!</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

          <button
            onClick={(e) => e.preventDefault()}
            className={styles.forgotPassword}
          >
            Forget Password?
          </button>
          <Button className={styles.button} type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
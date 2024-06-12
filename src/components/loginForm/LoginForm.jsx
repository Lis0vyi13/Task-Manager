import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import useActions from "../../hooks/useActions";

import Input from "../../ui/Input/Input";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();
  const { logIn } = useActions();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const form = formRef.current;
    form.reset();
    console.log("Form data:", data);
    logIn();
    navigate("/");
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormContent}>
        <h2 className={styles.hello}>Welcome back!</h2>
        <p className={styles.slogan}>Access your tasks securely!</p>
        <form
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="email"
            register={register}
            required
            placeholder="email@gmail.com"
            type="email"
            autoComplete="email"
          />
          {errors.email && (
            <span className={styles.error}>Email is required</span>
          )}

          <Input
            label="password"
            register={register}
            required
            placeholder="Your password"
            type="password"
            autoComplete="current-password"
            minLength={4}
          />
          {errors.password && (
            <span className={styles.error}>Password is required</span>
          )}

          <button
            onClick={(e) => e.preventDefault()}
            className={styles.forgotPassword}
          >
            Forget Password?
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

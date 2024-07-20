import styles from "./Input.module.scss";

const Input = ({ name, htmlFor, label, register, options, ...rest }) => (
  <>
    <label htmlFor={htmlFor}>{label}</label>
    <input {...rest} {...register(name, options)} className={styles.input} />
  </>
);

export default Input;

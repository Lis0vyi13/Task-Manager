import styles from "./Input.module.scss";

const Input = ({ name, label, register, options, ...rest }) => (
  <>
    <label>{label}</label>
    <input {...rest} {...register(name, options)} className={styles.input} />
  </>
);

export default Input;

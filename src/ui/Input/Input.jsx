import styles from "./Input.module.scss";

const Input = ({
  label,
  register,
  required,
  placeholder,
  type,
  autoComplete,
  minLength,
}) => (
  <>
    <label style={{ marginTop: 10, textTransform: "capitalize" }}>
      {label}
    </label>
    <input
      type={type}
      minLength={minLength}
      placeholder={placeholder}
      className={styles.input}
      autoComplete={autoComplete}
      {...register(label, { required })}
    />
  </>
);

export default Input;

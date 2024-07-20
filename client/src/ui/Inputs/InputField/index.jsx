import { useController } from "react-hook-form";
import styles from "./InputField.module.scss";

const InputField = ({
  name,
  control,
  label,
  rules,
  placeholder,
  type = "text",
  ...rest
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div className="inputBlock">
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        {...field}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        placeholder={placeholder}
        type={type}
        id={name}
        value={field.value || ""}
        {...rest}
      />
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};

export default InputField;

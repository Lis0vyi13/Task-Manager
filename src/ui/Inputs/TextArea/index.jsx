import { useController } from "react-hook-form";
import styles from "./TextArea.module.scss";

const TextArea = ({ name, control, label, rules, placeholder }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div className="inputBlock">
      <label className={styles.label}>{label}</label>
      <textarea
        {...field}
        className={`${styles.textArea} ${error ? styles.textAreaError : ""}`}
        placeholder={placeholder}
      />
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};

export default TextArea;

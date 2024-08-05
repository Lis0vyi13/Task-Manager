import { memo, useState } from "react";
import { useController } from "react-hook-form";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./InputField.module.scss";

const InputField = memo(
  ({ name, control, label, rules, placeholder, type = "text", ...rest }) => {
    const {
      field,
      fieldState: { error },
    } = useController({ name, control, rules });

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!isPasswordVisible);
    };

    return (
      <div className="inputBlock" style={{ position: "relative" }}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <div className={styles.inputWrapper}>
          <input
            {...field}
            className={`${styles.input} ${error ? styles.inputError : ""}`}
            placeholder={placeholder}
            type={
              type === "password"
                ? isPasswordVisible
                  ? "text"
                  : "password"
                : type
            }
            id={name}
            value={field.value || ""}
            {...rest}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.toggleButton}
            >
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          )}
        </div>

        {error && <p className={styles.errorText}>{error.message}</p>}
      </div>
    );
  },
);

export default InputField;

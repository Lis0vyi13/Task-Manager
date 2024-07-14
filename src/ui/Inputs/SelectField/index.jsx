import { Controller, useController } from "react-hook-form";
import Select from "react-select";
import styles from "./SelectField.module.scss";

const SelectField = ({
  name,
  control,
  label,
  rules,
  options,
  isMulti = false,
  placeholder,
}) => {
  const {
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div className="inputBlock">
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Select
            {...field}
            isMulti={isMulti}
            options={options}
            placeholder={placeholder}
            className={`${error ? styles.inputError : ""}`}
          />
        )}
      />
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};

export default SelectField;

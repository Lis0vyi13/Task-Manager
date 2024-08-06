import { Controller, useController } from "react-hook-form";
import Select from "react-select";
import useSelectField from "./useSelectField";

import styles from "./SelectField.module.scss";

const SelectField = ({
  name,
  control,
  label,
  rules,
  disabled,
  options,
  isMulti = false,
  placeholder,
}) => {
  const {
    fieldState: { error },
  } = useController({ name, control, rules });
  const { customStyles } = useSelectField();

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
            isDisabled={disabled}
            placeholder={placeholder}
            styles={customStyles}
            className={`${disabled ? styles.disabled : ""} ${error ? styles.inputError : ""}`}
          />
        )}
      />
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
};

export default SelectField;

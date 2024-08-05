import { memo } from "react";
import styles from "./ColorBox.module.scss";

const ColorBox = memo(({ option, field, setAvatarColor }) => {
  return (
    <div
      key={option.value}
      className={`${styles.colorSquare} ${
        field.value === option.value ? styles.selected : ""
      }`}
      style={{ backgroundColor: option.value }}
      onClick={() => {
        field.onChange(option.value);
        setAvatarColor(option.value);
      }}
    />
  );
});

export default ColorBox;

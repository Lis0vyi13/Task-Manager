import { memo, useCallback, useState } from "react";
import { useController } from "react-hook-form";

import ColorBox from "./ColorBox/ColorBox";
import UserAvatar from "@/components/Header/UserAvatar";

import styles from "./ColorPicker.module.scss";

const colorOptions = [
  { value: "#2744e5", label: "Default blue" },
  { value: "#ff0000", label: "Red" },
  { value: "#00ff00", label: "Green" },
  { value: "#0000ff", label: "Blue" },
  { value: "#ffff00", label: "Yellow" },
  { value: "#ff00ff", label: "Magenta" },
  { value: "#00ffff", label: "Cyan" },
  { value: "#008000", label: "Dark Green" },
  { value: "#000080", label: "Navy" },
  { value: "#ffa500", label: "Orange" },
  { value: "#800080", label: "Purple" },
  { value: "#ff1493", label: "Deep Pink" },
  { value: "#8b4513", label: "Saddle Brown" },
];

const ColorPicker = memo(({ name, control, label, rules }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules });
  const [pickedColor, setPickedColor] = useState("");
  const handleColorChange = useCallback((color) => {
    setPickedColor(color);
  }, []);

  const colorBoxProps = { field, setAvatarColor: handleColorChange };

  return (
    <div className="inputBlock">
      <label className={styles.label}>{label}</label>
      <div className={styles.colorsContainer}>
        <div className={styles.options}>
          {colorOptions.map((option, i) => (
            <ColorBox key={option + "-" + i} option={option} {...colorBoxProps} />
          ))}
        </div>
        <div className={styles.avatar}>
          <UserAvatar disabled avatarColor={pickedColor} />
        </div>
      </div>
      {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
  );
});

export default ColorPicker;

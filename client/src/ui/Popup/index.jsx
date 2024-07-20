import { useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

import styles from "./Popup.module.scss";

const Popup = ({ children, isClosing, handleClose, style, className }) => {
  const popupStyle = {
    ...style,
  };
  const ref = useRef();
  useOutsideClick(ref, handleClose);

  return (
    <div
      ref={ref}
      style={popupStyle}
      className={`${styles.popup} ${
        isClosing ? styles.closing : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Popup;

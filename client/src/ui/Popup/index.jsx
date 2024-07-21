import { useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "@/hooks/useOutsideClick";
import useBreakpoints from "@/hooks/useBreakpoints";

import styles from "./Popup.module.scss";

const Popup = ({
  children,
  isClosing,
  handleClose,
  desktopStyle,
  style,
  className,
}) => {
  const ref = useRef();
  useOutsideClick(ref, handleClose);
  const { isDesktop } = useBreakpoints();

  const popupStyle = useMemo(
    () => ({
      ...style,
    }),
    [style],
  );

  const popupClasses = useMemo(
    () =>
      `${styles.popup} ${desktopStyle ? styles.desktopStyle : ""} ${
        isClosing
          ? desktopStyle
            ? styles.desktopStyleClosing
            : styles.closing
          : ""
      } ${className}`,
    [desktopStyle, isClosing, className],
  );

  const popupContent = (
    <div ref={ref} style={popupStyle} className={popupClasses}>
      {children}
    </div>
  );

  return isDesktop || desktopStyle
    ? popupContent
    : createPortal(popupContent, document.body);
};

export default Popup;

import { createPortal } from "react-dom";

import useModal from "./useModal";

import styles from "./Modal.module.scss";

const Modal = ({
  onClose,
  noCross,
  onSubmit,
  className,
  changedValue,
  children,
}) => {
  const { modalRef } = useModal({ onClose, changedValue, onSubmit, styles });

  return createPortal(
    <div
      ref={modalRef}
      className={`${styles.overlay} ${className}`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
      {!noCross && (
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      )}
    </div>,
    document.body,
  );
};

export default Modal;

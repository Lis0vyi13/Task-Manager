import { memo } from "react";
import { createPortal } from "react-dom";

import useModal from "./useModal";

import styles from "./Modal.module.scss";

const Modal = memo(
  ({ onClose, noCross, onSubmit, className, changedValue, children }) => {
    const { modalRef, modalContentRef } = useModal({
      onClose,
      changedValue,
      onSubmit,
      styles,
    });

    return createPortal(
      <div
        ref={modalRef}
        className={`${styles.overlay} ${className}`}
        onClick={onClose}
      >
        <div
          ref={modalContentRef}
          className={styles.modalWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
        {!noCross && (
          <button
            className={styles.closeButton}
            onSubmit={onSubmit}
            onClick={onClose}
          >
            &times;
          </button>
        )}
      </div>,
      document.body,
    );
  },
);

export default Modal;

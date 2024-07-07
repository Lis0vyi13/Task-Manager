import styles from "./Modal.module.scss";

const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Modal;

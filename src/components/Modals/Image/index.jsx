import Loader from "@/components/Loader";

import styles from "./ImageModal.module.scss";

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      {src ? (
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <img className={styles.image} src={src} alt={alt} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ImageModal;

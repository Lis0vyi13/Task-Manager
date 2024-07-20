import { useEffect, useState } from "react";

import Loader from "@/ui/Loader";

import Modal from "../Modal";
import styles from "./ImageModal.module.scss";

const ImageModal = ({ src, alt, changedValue, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <Modal changedValue={changedValue} onClose={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img
          className={styles.image}
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
        />
        {isLoading && <Loader />}
      </div>
    </Modal>
  );
};

export default ImageModal;

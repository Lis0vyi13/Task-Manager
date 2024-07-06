import { useState } from "react";
import Title from "@/ui/Title";

import styles from "./TaskDetailsRight.module.scss";
import ImageModal from "@/components/Modals/Image";

const TaskDetailsRight = ({ task }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <div className={styles.description}>
        <Title className={styles.title}>TASK DESCRIPTION</Title>
        <p>{task.description || "No description added"}</p>
      </div>
      <div className={styles.assetsBlock}>
        <Title className={styles.title}>Assets</Title>
        <div className={styles.assets}>
          {task?.assets?.length > 0 ? (
            task.assets.map((asset, i) => (
              <img
                onClick={() => handleImageClick(asset)}
                key={`asset-${i}`}
                className={styles.asset}
                src={asset}
                alt={`asset ${i}`}
              />
            ))
          ) : (
            <p>No assets available</p>
          )}
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Selected asset"
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default TaskDetailsRight;

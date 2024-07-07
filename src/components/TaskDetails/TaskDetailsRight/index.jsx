import Title from "@/ui/Title";
import ImageModal from "@/ui/Modals/Image";
import Loader from "@/ui/Loader";

import useTaskDetails from "./useTaskDetails";

import styles from "./TaskDetailsRight.module.scss";

const TaskDetailsRight = ({ task }) => {
  const { selectedImage, loading, handleImageClick, handleCloseModal } =
    useTaskDetails({ task });

  return (
    <>
      <div className={styles.description}>
        <Title className={styles.title}>TASK DESCRIPTION</Title>
        <p>{task.description || "No description added"}</p>
      </div>
      <div className={styles.assetsBlock}>
        <Title className={styles.title}>Assets</Title>
        <div className={styles.assets}>
          {loading ? (
            <div className={styles.loader}>
              <Loader />
            </div>
          ) : task?.assets?.length > 0 ? (
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

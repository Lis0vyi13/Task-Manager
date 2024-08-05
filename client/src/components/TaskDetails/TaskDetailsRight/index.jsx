import Title from "@/ui/Title";
import ImageModal from "@/ui/Modals/Image";
import Loader from "@/ui/Loader";

import useTaskDetails from "./useTaskDetails";

import styles from "./TaskDetailsRight.module.scss";

const TaskDetailsRight = ({ task }) => {
  const { selectedImage, loading, handleImageClick, handleCloseModal } = useTaskDetails({ task });
  const isAssets = task?.assets?.length > 0;
  const isLinks = task?.links?.length > 0;

  return (
    <>
      <div className={styles.description}>
        <Title className={styles.title}>TASK DESCRIPTION</Title>
        <p>{task?.description || "No description added"}</p>
      </div>
      <div className={styles.assetsBlock}>
        <Title className={styles.title}>Assets</Title>
        <div className={`${styles.assets} ${isAssets ? styles.assetsCenter : ""}`}>
          {loading ? (
            <div className={styles.loader}>
              <Loader />
            </div>
          ) : isAssets ? (
            task?.assets?.map((asset, i) => (
              <img
                onClick={() => handleImageClick(asset)}
                key={`asset-${i}`}
                className={styles.asset}
                src={asset}
                alt={`asset ${i}`}
              />
            ))
          ) : (
            <span className={styles.noAssetsText}>No assets available</span>
          )}
        </div>
      </div>

      <div className={styles.linksBlock}>
        <Title className={styles.title}>Support links</Title>
        <div className={styles.links}>
          {isLinks ? (
            <ul className={styles.list}>
              {task?.links?.map((link, i) => (
                <li key={link + i} className={styles.listItem}>
                  <a className={styles.link} href={link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No links available</p>
          )}
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          changedValue={selectedImage}
          src={selectedImage}
          alt="Selected asset"
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default TaskDetailsRight;

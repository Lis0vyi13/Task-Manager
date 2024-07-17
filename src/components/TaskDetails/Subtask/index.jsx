import { useMemo } from "react";
import useSubtask from "./useSubtask";

import More from "@/components/More";
import Popup from "@/ui/Popup";
import PopupItem from "@/components/PopupItem";
import QuestionModal from "@/ui/Modals/QuestionModal";
import SubtaskModal from "@/ui/Modals/SubtaskModal";

import { MdTaskAlt } from "react-icons/md";
import styles from "./Subtask.module.scss";

const Subtask = ({ title, date, tag, done }) => {
  const {
    doneHandler,
    isOpened,
    isClosing,
    handleToggle,
    handleClose,
    OPTIONS,
    isDeleteModalOpen,
    closeDeleteModal,
    isEditModalOpen,
    closeEditModal,
  } = useSubtask();

  const subtaskData = useMemo(
    () => ({
      title,
      date,
      tag,
    }),
    [date, tag, title],
  );

  return (
    <div className={styles.subtask}>
      <div className={styles.subtaskIcon}>
        <MdTaskAlt color="rgb(124,58,237)" size={26} />
      </div>
      <div className={styles.subtaskInfo}>
        <header className={styles.header}>
          <span className={styles.date}>{new Date(date).toDateString()}</span>
          <div className={styles.tags}>
            <span className={styles.tag}>{tag}</span>
            {done && (
              <span className={`${styles.doneTag} ${styles.tag}`}>Done</span>
            )}
          </div>
        </header>
        <main className={styles.main}>
          <p className={styles.subtaskTitle}>{title}</p>
          <div className={styles.more}>
            <More onClick={handleToggle} />
          </div>
          {isOpened && (
            <Popup
              className={`${styles.popup}`}
              isClosing={isClosing}
              handleClose={handleClose}
            >
              {OPTIONS.map((block) =>
                block.map((item, i) => (
                  <PopupItem
                    disabled={item.permission}
                    key={item.title}
                    className={i + 1 === block.length ? "divider" : ""}
                    icon={item.icon}
                    title={item.title}
                    handleClose={handleClose}
                    onClick={item.onClick}
                  />
                )),
              )}
            </Popup>
          )}
        </main>
        <footer className={styles.footer}>
          <button
            onClick={doneHandler}
            className={`${done ? styles.undone : styles.done} ${styles.button}`}
          >
            {done ? "Mark as Undone" : "Mark as Done"}
          </button>
        </footer>

        {isEditModalOpen && (
          <SubtaskModal
            changedValue={isEditModalOpen}
            onClose={closeEditModal}
            subtask={subtaskData}
          />
        )}
        {isDeleteModalOpen && (
          <QuestionModal
            changedValue={isDeleteModalOpen}
            onClose={closeDeleteModal}
            type={"delete"}
            text={"Are you sure to delete current subtask?"}
          />
        )}
      </div>
    </div>
  );
};

export default Subtask;

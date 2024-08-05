import { useEffect, useMemo, useRef } from "react";
import useUser from "@/hooks/useUser";
import useSubtask from "./useSubtask";

import More from "@/components/More";
import Popup from "@/ui/Popup";
import PopupItem from "@/components/PopupItem";
import QuestionModal from "@/ui/Modals/QuestionModal";
import SubtaskModal from "@/ui/Modals/SubtaskModal";

import { MdTaskAlt } from "react-icons/md";
import styles from "./Subtask.module.scss";

const Subtask = ({ task, _id: subtaskId, title, date, tag, done, isLastChild }) => {
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
  } = useSubtask({ task, subtaskId });
  const markButtonRef = useRef(null);
  const user = useUser();

  useEffect(() => {
    const markButton = markButtonRef.current;

    markButton.addEventListener("click", function () {
      markButton.classList.remove(styles.pulse);
      void markButton.offsetWidth;
      markButton.classList.add(styles.pulse);
    });
  }, []);
  const subtaskData = useMemo(
    () => ({
      title,
      date,
      tag,
      subtaskId,
    }),
    [date, subtaskId, tag, title],
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
            {done && <span className={`${styles.doneTag} ${styles.tag}`}>Done</span>}
          </div>
        </header>
        <main className={styles.main}>
          <p className={styles.subtaskTitle}>{title}</p>
          <div className={styles.more}>
            <More onClick={handleToggle} />
          </div>
          {isOpened && (
            <Popup
              className={`${styles.popup} ${isLastChild ? styles.lastSubtaskPopup : ""}`}
              isClosing={isClosing}
              handleClose={handleClose}
              desktopStyle
            >
              {OPTIONS.map((block, blockIndex) =>
                block.map((item, i) => (
                  <PopupItem
                    disabled={!user?.isAdmin && item.permission}
                    key={item.title}
                    className={
                      i + 1 === block.length && blockIndex + 1 !== OPTIONS.length ? `divider` : ""
                    }
                    icon={item.icon}
                    title={item.title}
                    handleClose={handleClose}
                    onClick={user?.isAdmin || !item.permission ? item.onClick : undefined}
                  />
                )),
              )}
            </Popup>
          )}
        </main>
        <footer className={styles.footer}>
          <button
            ref={markButtonRef}
            onClick={doneHandler}
            className={`${done ? styles.undone : styles.done} ${styles.button}`}
          >
            {done ? "Mark as Undone" : "Mark as Done"}
          </button>
        </footer>

        {isEditModalOpen && (
          <SubtaskModal
            {...task}
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

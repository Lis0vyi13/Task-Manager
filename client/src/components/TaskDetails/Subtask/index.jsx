import { useEffect, useMemo, useRef } from "react";
import useUser from "@/hooks/useUser";
import { isTeamMember } from "@/utils/isTeamMember";
import useSubtask from "./useSubtask";

import More from "@/components/More";
import Popup from "@/ui/Popup";
import PopupItem from "@/components/PopupItem";
import QuestionModal from "@/ui/Modals/QuestionModal";
import SubtaskModal from "@/ui/Modals/SubtaskModal";

import { MdTaskAlt } from "react-icons/md";
import styles from "./Subtask.module.scss";

const Subtask = ({ task, _id: subtaskId, createdBy, title, date, tag, done, isLastChild }) => {
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
  const isMember = isTeamMember(task, user);
  const isSubtaskCreator = createdBy === user?._id;

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
                    disabled={!user?.isAdmin && !isSubtaskCreator}
                    key={item.title}
                    className={
                      i + 1 === block.length && blockIndex + 1 !== OPTIONS.length ? `divider` : ""
                    }
                    icon={item.icon}
                    title={item.title}
                    handleClose={handleClose}
                    onClick={user?.isAdmin && isSubtaskCreator ? item.onClick : undefined}
                  />
                )),
              )}
            </Popup>
          )}
        </main>
        <footer className={styles.footer}>
          <button
            disabled={!user?.isAdmin && !isMember && !isSubtaskCreator}
            ref={markButtonRef}
            title={
              !user?.isAdmin && !isMember && !isSubtaskCreator
                ? "You need to be admin or member of task"
                : done
                ? "Mark as Undone"
                : "Mark as Done"
            }
            onClick={doneHandler}
            className={`${
              !user?.isAdmin && !isMember && !isSubtaskCreator
                ? ""
                : done
                ? styles.undone
                : styles.done
            } ${styles.button}`}
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
            text={"Are you sure you want to delete current subtask?"}
          />
        )}
      </div>
    </div>
  );
};

export default Subtask;

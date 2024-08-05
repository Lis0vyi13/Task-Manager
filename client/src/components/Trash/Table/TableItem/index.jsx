import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import useTrashTable from "../useTrashTable";
import useModal from "@/hooks/useModal";
import useUser from "@/hooks/useUser";
import useBreakpoints from "@/hooks/useBreakpoints";

import QuestionModal from "@/ui/Modals/QuestionModal";
import PriorityIndicator from "@/components/PriorityIndicator";
import StageCircle from "@/components/StageCircle";

import { MdDelete, MdRestore } from "react-icons/md";

import styles from "../Table.module.scss";

const TableItem = ({ task, navigateToTask }) => {
  const { isDesktop } = useBreakpoints();
  const [modalType, setModalType] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const user = useUser();

  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal({
    setItem: setSelectedTask,
  });

  const { handleDeleteTask, handleRestoreTask } = useTrashTable();
  const modalData = useMemo(
    () => ({
      restore: {
        text: "Are you sure you want to restore current task?",
        type: "restore",
        submitButtonText: "Restore",
        handler: () => handleRestoreTask(task?._id),
      },
      delete: {
        text: "Are you sure you want to delete current task?",
        type: "delete",
        submitButtonText: "Delete",
        handler: () => handleDeleteTask(task?._id),
      },
    }),
    [handleDeleteTask, handleRestoreTask, task],
  );
  return (
    <tr key={task._id} className={styles.tr}>
      <td
        onClick={() => navigateToTask(task._id)}
        className={`${styles.td} ${styles.titleWrapper}`}
      >
        <StageCircle stage={task.stage} />
        <h1 className={styles.title}>{task.title}</h1>
      </td>
      {isDesktop ? (
        <>
          <td className={styles.td}>
            <PriorityIndicator withAddition priority={task.priority} />
          </td>
          <td className={styles.td}>
            <p>{task.stage}</p>
          </td>

          <td className={styles.td}>
            <p>{new Date(task.updatedAt).toDateString()}</p>
          </td>
          <td className={`${styles.actions} ${styles.td} `}>
            <button
              onClick={() => {
                openQuestionModal(task);
                setModalType("restore");
              }}
              className={styles.restoreButton}
            >
              <MdRestore title={"Restore"} className={`${styles.restore} ${styles.actionIcon}`} />
            </button>

            <button
              disabled={!user?.isAdmin}
              onClick={() => {
                openQuestionModal(task);
                setModalType("delete");
              }}
              className={styles.deleteButton}
            >
              <MdDelete
                title={!user.isAdmin ? "You need admin permissions" : "Delete"}
                className={`${styles.delete} ${styles.actionIcon}`}
              />
            </button>
          </td>
        </>
      ) : (
        <td className={`${styles.actions} ${styles.td} `}>
          <button
            disabled={!user?.isAdmin}
            onClick={() => {
              openQuestionModal(task);
              setModalType("restore");
            }}
            className={styles.restoreButton}
          >
            <MdRestore
              title={!user.isAdmin ? "You need admin permissions" : "Restore"}
              className={`${styles.restore} ${styles.actionIcon}`}
            />
          </button>

          <button
            disabled={!user?.isAdmin}
            onClick={() => {
              openQuestionModal(task);
              setModalType("delete");
            }}
            className={styles.deleteButton}
          >
            <MdDelete
              title={!user.isAdmin ? "You need admin permissions" : "Delete"}
              className={`${styles.delete} ${styles.actionIcon}`}
            />
          </button>
        </td>
      )}
      {isQuestionModalOpen &&
        selectedTask?._id === task._id &&
        createPortal(
          <QuestionModal
            changedValue={isQuestionModalOpen}
            onClose={closeQuestionModal}
            task={selectedTask}
            {...modalData[modalType]}
          />,
          document.body,
        )}
    </tr>
  );
};

export default TableItem;

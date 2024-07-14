import { useCallback, useState } from "react";
import { createPortal } from "react-dom";

import useBreakpoints from "@/hooks/useBreakpoints";
import useModal from "@/hooks/useModal";

import QuestionModal from "@/ui/Modals/QuestionModal";
import PriorityIndicator from "@/components/PriorityIndicator";
import StageCircle from "@/components/StageCircle";

import { MdDelete, MdRestore } from "react-icons/md";
import styles from "./Table.module.scss";

const modalData = {
  restore: {
    text: "Are you sure you want to restore current task?",
    type: "restore",
    submitButtonText: "Restore",
  },
  delete: {
    text: "Are you sure you want to delete current task?",
    type: "delete",
    submitButtonText: "Delete",
  },
};

const Table = ({ titles, filteredTask, navigate }) => {
  const navigateToTask = useCallback((id) => navigate(id), [navigate]);
  const { isDesktop } = useBreakpoints();
  const [modalType, setModalType] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal(
    {
      setItem: setSelectedTask,
    },
  );

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {isDesktop ? (
            titles.map((title) => (
              <th key={title} className={`${styles.th}`}>
                {title}
              </th>
            ))
          ) : (
            <th className={styles.th}>{titles[0]}</th>
          )}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {filteredTask.map((task) => (
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
                  <MdRestore
                    onClick={() => {
                      openQuestionModal(task);
                      setModalType("restore");
                    }}
                    title="Restore"
                    className={`${styles.restore} ${styles.actionIcon}`}
                  />
                  <MdDelete
                    onClick={() => {
                      openQuestionModal(task);
                      setModalType("delete");
                    }}
                    title="Delete"
                    className={`${styles.delete} ${styles.actionIcon}`}
                  />
                </td>
              </>
            ) : (
              <td className={`${styles.actions} ${styles.td} `}>
                <MdRestore
                  onClick={() => {
                    openQuestionModal(task);
                    setModalType("restore");
                  }}
                  title="Restore"
                  className={`${styles.restore} ${styles.actionIcon}`}
                />
                <MdDelete
                  onClick={() => {
                    openQuestionModal(task);
                    setModalType("delete");
                  }}
                  title="Delete"
                  className={`${styles.delete} ${styles.actionIcon}`}
                />
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
        ))}
      </tbody>
    </table>
  );
};

export default Table;

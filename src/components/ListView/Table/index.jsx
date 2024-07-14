import { useCallback, useState } from "react";

import useBreakpoints from "@/hooks/useBreakpoints";
import useModal from "@/hooks/useModal";

import TaskModal from "@/ui/Modals/TaskModal";
import QuestionModal from "@/ui/Modals/QuestionModal";

import Team from "@/components/Team";
import PriorityIndicator from "@/components/PriorityIndicator";
import StageCircle from "@/components/StageCircle";
import More from "@/components/More";

import { FaList } from "react-icons/fa";
import { MdAttachFile, MdOutlineComment } from "react-icons/md";

import { formatDate } from "@/constants";

import styles from "./Table.module.scss";

const Table = ({ filteredTasks, titles, navigateToTask }) => {
  const { isDesktop } = useBreakpoints();

  const [selectedTask, setSelectedTask] = useState(null);

  const [isEditModalOpen, openEditModal, closeEditModal] = useModal({
    setItem: setSelectedTask,
  });

  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal(
    {
      setItem: setSelectedTask,
    },
  );

  const onEdiTaskHandler = useCallback(() => {}, []);
  const onDeleteTaskHandler = useCallback(() => {}, []);

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
        {filteredTasks.map((task) => (
          <tr className={styles.tr} key={task._id}>
            <td
              onClick={() => navigateToTask(task._id)}
              className={`${styles.tableTitle} ${styles.td}`}
            >
              <StageCircle stage={task.stage} />
              <h1 className={styles.title}>{task.title}</h1>
            </td>
            {isDesktop ? (
              <>
                <td className={`${styles.priority} ${styles.td}`}>
                  <PriorityIndicator withAddition priority={task.priority} />
                </td>
                <td
                  className={`${styles.td} ${styles.createdAt} ${styles.capitalize}`}
                >
                  <span className={styles.daysAgo}>
                    {formatDate(new Date(task.date))}
                  </span>
                </td>
                <td className={`${styles.td} ${styles.details}`}>
                  <article title="Commentary" className={styles.commentary}>
                    <MdOutlineComment />
                    <span>{task.activities.length}</span>
                  </article>
                  <article title="Assets" className={styles.assets}>
                    <MdAttachFile />
                    <span>{task.assets.length}</span>
                  </article>
                  <article title={"Subtasks"} className={styles.subtasks}>
                    <FaList />
                    <span>0/{task.subTasks.length}</span>
                  </article>
                </td>
                <td className={`${styles.td}`}>
                  <Team
                    infoClassName={styles.userInfo}
                    side={"left"}
                    className={styles.team}
                    team={task.team}
                  />
                </td>
                <td className={`${styles.actions} ${styles.td} `}>
                  <button
                    onClick={() => openEditModal(task)}
                    className={styles.editBtn}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openQuestionModal(task)}
                    className={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </>
            ) : (
              <td>
                <More />
              </td>
            )}
            {isEditModalOpen && selectedTask?._id === task._id && (
              <TaskModal
                changedValue={isEditModalOpen}
                onClose={closeEditModal}
                onSubmit={onEdiTaskHandler}
                task={selectedTask}
              />
            )}
            {isQuestionModalOpen && selectedTask?._id === task._id && (
              <QuestionModal
                changedValue={isQuestionModalOpen}
                onClose={closeQuestionModal}
                task={selectedTask}
                onSubmit={onDeleteTaskHandler}
                type={"delete"}
                text={"Are you sure you want to delete the selected task?"}
                submitButtonText={"Delete"}
              />
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

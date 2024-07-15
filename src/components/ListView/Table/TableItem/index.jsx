import useTaskPopup from "@/hooks/useTaskPopup";
import useBreakpoints from "@/hooks/useBreakpoints";

import QuestionModal from "@/ui/Modals/QuestionModal";
import Team from "@/components/Team";
import StageCircle from "@/components/StageCircle";
import More from "@/components/More";
import PopupItem from "@/components/BoardView/Task/PopupItem";
import Popup from "@/ui/Popup";
import TaskModals from "@/components/TaskModals";
import PriorityIndicator from "@/components/PriorityIndicator";

import { MdAttachFile, MdOutlineComment } from "react-icons/md";
import { FaList } from "react-icons/fa";

import { formatDate } from "@/constants";
import styles from "./TableItem.module.scss";

const TableItem = ({ task, navigateToTask }) => {
  const {
    isEditModalOpen,
    closeEditModal,
    isQuestionModalOpen,
    closeQuestionModal,
    openQuestionModal,
    openEditModal,
    handleToggle,
    isOpened,
    isClosing,
    closeAddSubtaskModal,
    handleClose,
    isAddSubtaskModalOpen,
    onAddSubtaskHandler,
    closeStageModal,
    isStageModalOpen,
    onDeleteTaskHandler,
    TASK_MORE_OPTIONS,
  } = useTaskPopup({ task });

  const { isDesktop } = useBreakpoints();

  return (
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
        <td className={styles.more}>
          <More
            onClick={() => {
              handleToggle();
            }}
          />
          {isOpened && (
            <Popup
              className={`${styles.popup}`}
              isClosing={isClosing}
              handleClose={handleClose}
            >
              {TASK_MORE_OPTIONS.map((block) =>
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
        </td>
      )}
      <TaskModals
        task={task}
        isEditModalOpen={isEditModalOpen}
        closeEditModal={closeEditModal}
        isAddSubtaskModalOpen={isAddSubtaskModalOpen}
        closeAddSubtaskModal={closeAddSubtaskModal}
        onAddSubtaskHandler={onAddSubtaskHandler}
        isQuestionModalOpen={isQuestionModalOpen}
        closeQuestionModal={closeQuestionModal}
        onDeleteTaskHandler={onDeleteTaskHandler}
        isStageModalOpen={isStageModalOpen}
        closeStageModal={closeStageModal}
      />
      {isQuestionModalOpen && (
        <QuestionModal
          changedValue={isQuestionModalOpen}
          onClose={closeQuestionModal}
          task={task}
          type={"delete"}
          text={"Are you sure you want to delete the selected task?"}
          submitButtonText={"Delete"}
        />
      )}
    </tr>
  );
};

export default TableItem;

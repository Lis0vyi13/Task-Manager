import { useCallback } from "react";
import moment from "moment";
import useTaskPopup from "@/hooks/useTaskPopup";
import useBreakpoints from "@/hooks/useBreakpoints";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import Popup from "@/ui/Popup";
import StageCircle from "@/components/StageCircle";
import PriorityIndicator from "@/components/PriorityIndicator";
import Team from "@/components/Team";
import More from "@/components/More";
import PopupItem from "@/components/BoardView/Task/PopupItem";
import TaskModals from "@/components/TaskModals";

import styles from "./DashboardTaskItem.module.scss";

const DashboardTaskItem = ({ task, taskIndex }) => {
  const {
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
    TASK_MORE_OPTIONS,
    navigate,
    isEditModalOpen,
    closeEditModal,
    isAddSubtaskModalOpen,
    closeAddSubtaskModal,
    onAddSubtaskHandler,
    isQuestionModalOpen,
    closeQuestionModal,
    onDeleteTaskHandler,
    isStageModalOpen,
    closeStageModal,
  } = useTaskPopup({ task });

  const { isDesktop } = useBreakpoints();
  const handleTaskClick = useCallback(
    (taskId) => {
      navigate(taskId);
    },
    [navigate],
  );

  return (
    <tr key={task._id} className={styles.row}>
      <td
        onClick={() => handleTaskClick(task._id)}
        className={`${styles.td} ${styles.pointer}`}
      >
        <StageCircle className={styles.circle} stage={task.stage} />
        <h1 className={styles.text}>{task.title}</h1>
      </td>
      {isDesktop ? (
        <>
          <td className={styles.td}>
            <div className={styles.priority}>
              <PriorityIndicator priority={task.priority} />
            </div>
          </td>
          <td className={styles.td}>
            <Team noPropagation {...task} index={taskIndex} />
          </td>
          <td className={`${styles.td} ${styles.createdAt}`}>
            <span className={styles.daysAgo}>
              {capitalizeFirstLetter(moment(task.createdAt).fromNow())}
            </span>
          </td>
        </>
      ) : (
        <td className={styles.more}>
          <More onClick={handleToggle} />
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
                    className={i + 1 === block.length ? styles.divider : ""}
                    icon={item.icon}
                    title={item.title}
                    handleClose={handleClose}
                    onClick={item.onClick}
                  />
                )),
              )}
            </Popup>
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
        </td>
      )}
    </tr>
  );
};

export default DashboardTaskItem;

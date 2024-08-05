import { memo, useEffect } from "react";

import useTaskDetailsLeft from "./useTaskDetailsLeft";
import useModal from "@/hooks/useModal";

import Title from "@/ui/Title";
import SubtaskModal from "@/ui/Modals/SubtaskModal";
import PriorityStatus from "@/components/PriorityStatus";
import StageCircle from "@/components/StageCircle";
import TeamMember from "../TeamMember";
import Subtask from "../Subtask";

import styles from "./TaskDetailsLeft.module.scss";
import { IoMdAdd } from "react-icons/io";
import { useLocation } from "react-router-dom";

const TaskDetailsLeft = memo(({ task }) => {
  const { progressColor, subtasksProgress, subTasks } = useTaskDetailsLeft({
    task,
  });
  const [isAddSubtaskModalOpen, openAddSubtaskModal, closeAddSubtaskModal] = useModal({
    setItem: () => {},
  });
  const location = useLocation();

  useEffect(() => {
    const locationState = location.state?.state;
    if (locationState?.isSubtaskModalOpen) {
      openAddSubtaskModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return (
    <>
      <div className={styles.taskInfo}>
        <div className={styles.priorityStageBlock}>
          <PriorityStatus priority={task?.priority} />
          <div className={styles.stageBlock}>
            <StageCircle stage={task?.stage} />
            <span className={styles.stage}>{task?.stage}</span>
          </div>
        </div>
        <div className={styles.createdAtBlock}>
          <span className={styles.createdAt}>
            Created at: {new Date(task?.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <div className={styles.assetsSubTasksBlock}>
        <span>Assets: {task?.assets.length}</span>
        <span>|</span>
        <span>Subtasks: {task?.subTasks.length}</span>
      </div>
      <div className={styles.teamBlock}>
        <Title className={styles.titleSecondary}>TASK TEAM</Title>
        <div className={styles.team}>
          {task?.team.map((member) => (
            <div key={member._id} className={styles.memberBlock}>
              <TeamMember user={member} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.subtasksBlock}>
        <div className={styles.substasksTitle}>
          <div className={styles.subtasksTitleBlock}>
            <Title className={styles.titleSecondary}>Subtasks</Title>
            <div
              style={{ background: progressColor.background }}
              className={styles.subtasksProgress}
            >
              <span
                style={{ color: progressColor.isLight ? "#000" : "#fff" }}
                className={styles.subtasksProgressValue}
              >
                {subtasksProgress.toFixed(2)}%
              </span>
            </div>
          </div>
          <div>
            <IoMdAdd
              title="Add subtask"
              className={styles.addSubtaskButton}
              onClick={() => openAddSubtaskModal()}
            />
          </div>
        </div>
        <div className={styles.subtasks}>
          {subTasks.map((subtask, i) => (
            <Subtask
              isLastChild={i + 1 === subTasks.length}
              task={task}
              key={subtask?._id}
              {...subtask}
            />
          ))}
        </div>
      </div>
      {isAddSubtaskModalOpen && (
        <SubtaskModal
          {...task}
          changedValue={isAddSubtaskModalOpen}
          onClose={closeAddSubtaskModal}
        />
      )}
    </>
  );
});

export default TaskDetailsLeft;

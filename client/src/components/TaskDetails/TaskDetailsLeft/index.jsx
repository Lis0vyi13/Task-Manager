import { memo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useTaskDetailsLeft from "./useTaskDetailsLeft";
import useUser from "@/hooks/useUser";

import Title from "@/ui/Title";
import SubtaskModal from "@/ui/Modals/SubtaskModal";
import PriorityStatus from "@/components/PriorityStatus";
import StageCircle from "@/components/StageCircle";
import TeamMember from "../TeamMember";
import Subtask from "../Subtask";

import styles from "./TaskDetailsLeft.module.scss";
import { IoMdAdd } from "react-icons/io";

const TaskDetailsLeft = memo(({ task }) => {
  const {
    progressColor,
    subtasksProgress,
    subTasks,
    openAddSubtaskModal,
    isAddSubtaskModalOpen,
    closeAddSubtaskModal,
  } = useTaskDetailsLeft({
    task,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const user = useUser();
  const isTaskCreator = task?.createdBy === user?._id;

  useEffect(() => {
    const locationState = location.state?.state;
    if (locationState?.isSubtaskModalOpen) {
      openAddSubtaskModal();
      navigate(location.pathname, { replace: true, state: { ...location.state, state: null } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <button disabled={!user?.isAdmin && !isTaskCreator} onClick={() => openAddSubtaskModal()}>
            <IoMdAdd
              title={
                !user?.isAdmin && !isTaskCreator
                  ? "You need be admin or creator of task"
                  : "Add subtask"
              }
              className={styles.addSubtaskButton}
            />
          </button>
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

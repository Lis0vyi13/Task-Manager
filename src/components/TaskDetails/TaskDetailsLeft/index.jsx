import { memo } from "react";

import useTaskDetailsLeft from "./useTaskDetailsLeft";

import Title from "@/ui/Title";

import PriorityStatus from "@/components/PriorityStatus";
import StageCircle from "@/components/StageCircle";
import TeamMember from "../TeamMember";
import Subtask from "../Subtask";

import styles from "./TaskDetailsLeft.module.scss";

const TaskDetailsLeft = memo(({ task }) => {
  const { progressColor, subtasksProgress, subTasks } = useTaskDetailsLeft({
    task,
  });

  return (
    <>
      <div className={styles.taskInfo}>
        <div className={styles.priorityStageBlock}>
          <PriorityStatus priority={task.priority} />
          <div className={styles.stageBlock}>
            <StageCircle stage={task.stage} />
            <span className={styles.stage}>{task.stage}</span>
          </div>
        </div>
        <div className={styles.createdAtBlock}>
          <span className={styles.createdAt}>
            Created at: {new Date(task.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <div className={styles.assetsSubTasksBlock}>
        <span>Assets: {task.assets.length}</span>
        <span>|</span>
        <span>Sub-Tasks: {task.subTasks.length}</span>
      </div>
      <div className={styles.teamBlock}>
        <Title className={styles.titleSecondary}>TASK TEAM</Title>
        <div className={styles.team}>
          {task.team.map((member) => (
            <div key={member._id} className={styles.memberBlock}>
              <TeamMember user={member} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.subtasksBlock}>
        <div className={styles.substasksTitle}>
          <Title className={styles.titleSecondary}>Sub-tasks</Title>
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
        <div className={styles.subtasks}>
          {subTasks.map((subtask) => (
            <Subtask key={subtask._id} {...subtask} />
          ))}
        </div>
      </div>
    </>
  );
});

export default TaskDetailsLeft;

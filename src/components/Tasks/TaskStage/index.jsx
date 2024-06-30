import { memo } from "react";

import Task from "@/components/BoardView/Task";

import styles from "./TaskStage.module.scss";

const TaskStage = memo(({ stage, tasks, isExpand }) => {
  return (
    <article className={`${styles.stage} ${isExpand ? "" : styles.hide}`}>
      <div className={styles.content}>
        {tasks
          .filter((task) => task.stage === stage)
          .map((task) => (
            <Task {...task} key={task._id} />
          ))}
      </div>
    </article>
  );
});

export default TaskStage;

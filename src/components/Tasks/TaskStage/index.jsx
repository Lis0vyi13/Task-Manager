import { memo, useMemo } from "react";

import Task from "@/components/BoardView/Task";

import styles from "./TaskStage.module.scss";

const TaskStage = memo(({ stage, tasks, isExpand }) => {
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.stage === stage),
    [stage, tasks],
  );

  return (
    <article className={`${styles.stage} ${isExpand ? "" : styles.hide}`}>
      <div className={styles.content}>
        {filteredTasks.map((task) => (
          <Task {...task} key={task._id} />
        ))}
      </div>
    </article>
  );
});

export default TaskStage;

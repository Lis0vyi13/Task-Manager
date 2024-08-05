import { memo } from "react";

import useView from "@/hooks/useView";

import Loader from "@/ui/Loader";
import Task from "@/components/BoardView/Task";

import styles from "./TaskStage.module.scss";

const TaskStage = memo(({ stage, isExpand }) => {
  const { isLoading, filteredTasks } = useView({ stage });

  return (
    <article className={`${styles.stage} ${isExpand ? "" : styles.hide}`}>
      <div className={styles.content}>
        {isLoading ? (
          <Loader />
        ) : (
          filteredTasks.map((task, i) => (
            <Task task={task} isLastTask={i + 1 === filteredTasks.length} key={task._id} />
          ))
        )}
      </div>
    </article>
  );
});

export default TaskStage;

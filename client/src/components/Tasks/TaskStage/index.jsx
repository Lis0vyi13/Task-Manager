import { memo } from "react";

import useView from "@/hooks/useView";

import Loader from "@/ui/Loader";
import Task from "@/components/BoardView/Task";

import styles from "./TaskStage.module.scss";

const TaskStage = memo(({ stage, tasks, isExpand }) => {
  const { isLoading, filteredTasks } = useView({ stage, tasks });

  return (
    <article className={`${styles.stage} ${isExpand ? "" : styles.hide}`}>
      <div className={styles.content}>
        {isLoading ? (
          <Loader />
        ) : (
          filteredTasks.map((task) => <Task task={task} key={task._id} />)
        )}
      </div>
    </article>
  );
});

export default TaskStage;

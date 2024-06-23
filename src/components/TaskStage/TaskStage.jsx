import Task from "../Tasks/BoardView/Task/Task";

import styles from "./TaskStage.module.scss";

const TaskStage = ({ stage, tasks, isExpand }) => {
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
};

export default TaskStage;

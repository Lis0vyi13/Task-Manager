import TaskDetailsLeft from "./TaskDetailsLeft";
import TaskDetailsRight from "./TaskDetailsRight";

import styles from "./TaskDetails.module.scss";

const TaskDetails = ({ task }) => {
  return (
    <section className={styles.taskDetail}>
      <article className={styles.block}>
        <TaskDetailsLeft task={task} />
      </article>
      <article className={styles.block}>
        <TaskDetailsRight task={task} />
      </article>
    </section>
  );
};

export default TaskDetails;

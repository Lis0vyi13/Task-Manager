import PriorityStatus from "../PriorityStatus";

import styles from "./TaskDetail.module.scss";

const TaskDetail = ({ task }) => {
  return (
    <section className={styles.taskDetail}>
      <article className={styles.taskInfo}>
        <PriorityStatus priority={task.priority} />
      </article>
    </section>
  );
};

export default TaskDetail;

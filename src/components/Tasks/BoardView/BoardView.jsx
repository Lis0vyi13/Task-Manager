import Task from "./Task/Task";

import styles from "./BoardView.module.scss";

const BoardView = ({ tasks }) => {
  return (
    <section className={styles.boardView}>
      {tasks.map((task) => (
        <Task {...task} key={task._id} />
      ))}
    </section>
  );
};

export default BoardView;

import Tasks from "@/components/Tasks/Tasks";
import styles from "./TasksPage.module.scss";

const TasksPage = () => {
  return (
    <section className={styles.taskPage}>
      <Tasks />
    </section>
  );
};

export default TasksPage;

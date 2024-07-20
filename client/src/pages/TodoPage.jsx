import TasksLayout from "@/layouts/TasksLayout";

const TodoPage = () => {
  return (
    <section className="todo">
      <TasksLayout title={"To do"} stage={"todo"} />
    </section>
  );
};

export default TodoPage;

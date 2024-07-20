import TasksLayout from "@/layouts/TasksLayout";

const CompletedPage = () => {
  return (
    <section className="completed">
      <TasksLayout title={"Completed"} stage={"completed"} />
    </section>
  );
};

export default CompletedPage;

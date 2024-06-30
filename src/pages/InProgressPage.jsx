import TasksLayout from "@/layouts/TasksLayout";

const InProgressPage = () => {
  return (
    <section className="in-progress">
      <TasksLayout title={"In progress"} stage={"in progress"} />
    </section>
  );
};

export default InProgressPage;

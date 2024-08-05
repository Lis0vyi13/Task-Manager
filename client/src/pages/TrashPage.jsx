import Trash from "@/components/Trash";

import { useGetTrashedTasksQuery } from "@/redux/features/tasks/TaskSlice";

const TrashPage = () => {
  const { data } = useGetTrashedTasksQuery();
  return (
    <section className="trash">
      <Trash tasks={data?.tasks} />
    </section>
  );
};

export default TrashPage;

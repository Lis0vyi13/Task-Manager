import Trash from "@/components/Trash";
import { useSelector } from "react-redux";

const TrashPage = () => {
  const trashedTasks = useSelector((store) => store?.tasks?.trashedTasks);
  return (
    <section className="trash">
      <Trash tasks={trashedTasks?.tasks} />
    </section>
  );
};

export default TrashPage;

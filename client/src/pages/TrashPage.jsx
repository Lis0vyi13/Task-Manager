import Trash from "@/components/Trash";

import { tasks } from "@/constants";

const TrashPage = () => {
  return (
    <section className="trash">
      <Trash tasks={tasks} />
    </section>
  );
};

export default TrashPage;

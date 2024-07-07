import { useMemo, useState } from "react";
import useSearch from "./useSearch";

const useView = ({ tasks, stage }) => {
  const [isLoading, setisLoading] = useState(true);

  const query = useSearch();

  const filteredTasks = useMemo(() => {
    setisLoading(true);
    const stageFilteredTasks = stage
      ? tasks.filter((task) => task.stage === stage)
      : tasks;

    const queryFilteredTasks = query
      ? stageFilteredTasks.filter((task) =>
          task.title.toLowerCase().includes(query.toLowerCase()),
        )
      : stageFilteredTasks;
    setisLoading(false);

    return queryFilteredTasks;
  }, [query, stage, tasks]);

  return { isLoading, filteredTasks };
};

export default useView;

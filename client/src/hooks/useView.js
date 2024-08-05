import { useMemo, useState } from "react";
import useSearch from "./useSearch";
import { useSelector } from "react-redux";

const useView = ({ stage }) => {
  const [isLoading, setisLoading] = useState(true);
  const { tasks } = useSelector((store) => store.tasks.tasks);
  const query = useSearch();

  const filteredTasks = useMemo(() => {
    setisLoading(true);
    const untrashedTasks = tasks.filter((task) => !task.isTrashed);

    const stageFilteredTasks = stage
      ? untrashedTasks.filter((task) => task.stage === stage)
      : untrashedTasks;

    const queryFilteredTasks = query
      ? stageFilteredTasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase()))
      : stageFilteredTasks;
    setisLoading(false);

    return queryFilteredTasks;
  }, [query, stage, tasks]);

  return { isLoading, filteredTasks };
};

export default useView;

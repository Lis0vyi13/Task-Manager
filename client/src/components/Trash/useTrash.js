import { useMemo, useState } from "react";
import useSearch from "@/hooks/useSearch";
import useTaskDetailHandler from "@/hooks/useTaskDetailHandler";
import useModal from "@/hooks/useModal";

const useTrash = ({ tasks, titles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [modalType, setModalType] = useState(null);

  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal(
    {
      setItem: () => {},
    },
  );
  const query = useSearch();
  const filteredTask = useMemo(() => {
    setIsLoading(true);

    const trashedTasks = tasks.filter((task) => task.isTrashed);
    const queryTasks = query
      ? trashedTasks.filter((task) =>
          task?.title?.toLowerCase().includes(query.toLowerCase()),
        )
      : trashedTasks;

    setIsLoading(false);

    return queryTasks;
  }, [query, tasks]);

  const navigate = useTaskDetailHandler();

  const tableData = useMemo(
    () => ({ titles, navigate, filteredTask }),
    [titles, navigate, filteredTask],
  );
  return {
    filteredTask,
    isLoading,
    tableData,
    modalType,
    setModalType,
    isQuestionModalOpen,
    openQuestionModal,
    closeQuestionModal,
  };
};

export default useTrash;

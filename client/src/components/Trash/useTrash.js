import { useCallback, useEffect, useMemo, useState } from "react";
import useSearch from "@/hooks/useSearch";
import useTaskDetailHandler from "@/hooks/useTaskDetailHandler";
import useModal from "@/hooks/useModal";
import { toast } from "sonner";
import {
  useDeleteAllTasksMutation,
  useRestoreAllTasksMutation,
} from "@/redux/features/tasks/TaskSlice";

const useTrash = ({ tasks, titles }) => {
  const [filteredTask, setFilteredTask] = useState(tasks);
  const [isLoading, setIsLoading] = useState(true);
  const [modalType, setModalType] = useState(null);
  const [deleteAllTasks, { isLoading: onDeleteLoading }] = useDeleteAllTasksMutation();
  const [restoreAllTasks, { isLoading: onRestoreLoading }] = useRestoreAllTasksMutation();

  const handleDeleteAllTasks = useCallback(async () => {
    try {
      await deleteAllTasks().unwrap();
      toast.success("All trashed tasks deleted successfully!");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  }, [deleteAllTasks]);

  const handleRestoreAllTasks = useCallback(async () => {
    try {
      await restoreAllTasks().unwrap();
      toast.success("All trashed tasks restored successfully!");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  }, [restoreAllTasks]);

  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal({
    setItem: () => {},
  });

  const query = useSearch();

  useEffect(() => {
    const filterTasks = () => {
      setIsLoading(true);
      const queryTasks = query
        ? tasks.filter((task) => task?.title?.toLowerCase().includes(query.toLowerCase()))
        : tasks;
      setFilteredTask(queryTasks);
      setIsLoading(false);
    };

    filterTasks();
  }, [query, tasks]);

  const navigate = useTaskDetailHandler();

  const tableData = useMemo(
    () => ({ titles, navigate, filteredTask }),
    [titles, navigate, filteredTask],
  );

  const modalData = useMemo(
    () => ({
      restoreAll: {
        text: "Are you sure you want to restore all the tasks?",
        type: "restore",
        submitButtonText: "Restore all",
        handler: () => handleRestoreAllTasks(),
      },
      deleteAll: {
        text: "Are you sure you want to delete all the tasks?",
        type: "delete",
        submitButtonText: "Delete all",
        handler: () => handleDeleteAllTasks(),
      },
    }),
    [handleDeleteAllTasks, handleRestoreAllTasks],
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
    modalData,
    onDeleteLoading,
    onRestoreLoading,
  };
};

export default useTrash;

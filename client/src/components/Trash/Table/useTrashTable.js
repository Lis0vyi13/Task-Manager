import { useDeleteTaskMutation, useRestoreTaskMutation } from "@/redux/features/tasks/TaskSlice";
import { toast } from "sonner";

const useTrashTable = () => {
  const [deleteTask, { isLoading: onDeleteLoading }] = useDeleteTaskMutation();
  const [restoreTask, { isLoading: onRestoreLoading }] = useRestoreTaskMutation();

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask({ id }).unwrap();
      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const handleRestoreTask = async (id) => {
    try {
      await restoreTask({ id }).unwrap();
      toast.success("Task restored successfully!");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return { handleDeleteTask, handleRestoreTask, onDeleteLoading, onRestoreLoading };
};

export default useTrashTable;

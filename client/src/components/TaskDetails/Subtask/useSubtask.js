import { useCallback, useMemo } from "react";
import useAnimatedToggle from "@/hooks/useAnimatedToggle";
import useModal from "@/hooks/useModal";
import { useToggleSubtaskDoneMutation } from "@/redux/features/tasks/TaskSlice";

import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "sonner";

const useSubtask = ({ task, subtaskId }) => {
  const [toggleSubtaskDone] = useToggleSubtaskDoneMutation();
  const doneHandler = useCallback(async () => {
    try {
      const data = { taskId: task?._id, subTaskId: subtaskId };
      await toggleSubtaskDone(data).unwrap();
      toast.success("Subtask status updated");
    } catch (error) {
      toast.error(error.data.message);
    }
  }, [subtaskId, task?._id, toggleSubtaskDone]);

  const { isOpened, isClosing, handleToggle, handleClose } = useAnimatedToggle();

  const [isEditModalOpen, openEditModal, closeEditModal] = useModal({
    setItem: () => {},
  });
  const [isDeleteModalOpen, openDeleteModal, closeDeleteModal] = useModal({
    setItem: () => {},
  });

  const OPTIONS = useMemo(
    () => [
      [
        {
          icon: { Icon: MdEdit, color: "#000" },
          title: "Edit",
          onClick: openEditModal,
        },
      ],
      [
        {
          icon: { Icon: MdDelete, color: "red" },
          title: "Delete",
          onClick: openDeleteModal,
        },
      ],
    ],
    [openDeleteModal, openEditModal],
  );
  return {
    doneHandler,
    isOpened,
    isClosing,
    handleToggle,
    handleClose,
    OPTIONS,
    isDeleteModalOpen,
    closeDeleteModal,
    isEditModalOpen,
    closeEditModal,
  };
};

export default useSubtask;

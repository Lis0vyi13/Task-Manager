import { useCallback } from "react";
import useUser from "@/hooks/useUser";

import useTaskPopup from "@/hooks/useTaskPopup";

const useTask = ({ task }) => {
  const user = useUser();
  const onAddSubtaskHandler = useCallback(() => {}, []);
  const onDeleteTaskHandler = useCallback(() => {}, []);
  const {
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
    TASK_MORE_OPTIONS,
    navigate,
    openAddSubtaskModal,
    isEditModalOpen,
    closeEditModal,
    isAddSubtaskModalOpen,
    closeAddSubtaskModal,
    isQuestionModalOpen,
    closeQuestionModal,
    isStageModalOpen,
    openStageModal,
    closeStageModal,
  } = useTaskPopup({ task });

  return {
    user,
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
    TASK_MORE_OPTIONS,
    navigate,
    openAddSubtaskModal,
    isEditModalOpen,
    closeEditModal,
    isAddSubtaskModalOpen,
    closeAddSubtaskModal,
    isQuestionModalOpen,
    closeQuestionModal,
    isStageModalOpen,
    openStageModal,
    closeStageModal,
    onAddSubtaskHandler,
    onDeleteTaskHandler,
  };
};

export default useTask;

import QuestionModal from "@/ui/Modals/QuestionModal";
import StageModal from "@/ui/Modals/StageModal";
import TaskModal from "@/ui/Modals/TaskModal";
import SubtaskModal from "@/ui/Modals/SubtaskModal";

const TaskModals = ({
  task,
  isEditModalOpen,
  closeEditModal,
  isAddSubtaskModalOpen,
  closeAddSubtaskModal,
  onAddSubtaskHandler,
  isQuestionModalOpen,
  closeQuestionModal,
  onDeleteTaskHandler,
  isStageModalOpen,
  closeStageModal,
}) => {
  return (
    <>
      {isEditModalOpen && (
        <TaskModal
          onClose={closeEditModal}
          changedValue={isEditModalOpen}
          task={task}
        />
      )}
      {isAddSubtaskModalOpen && (
        <SubtaskModal
          changedValue={isAddSubtaskModalOpen}
          onClose={closeAddSubtaskModal}
          onSubmit={onAddSubtaskHandler}
        />
      )}
      {isQuestionModalOpen && (
        <QuestionModal
          changedValue={isQuestionModalOpen}
          onClose={closeQuestionModal}
          task={task}
          onSubmit={onDeleteTaskHandler}
          type={"delete"}
          text={"Are you sure you want to delete the selected task?"}
          submitButtonText={"Delete"}
        />
      )}
      {isStageModalOpen && (
        <StageModal
          changedValue={isStageModalOpen}
          onClose={closeStageModal}
          onSubmit={closeStageModal}
          task={task}
        />
      )}
    </>
  );
};

export default TaskModals;

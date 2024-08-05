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
  isLoading,
  deleteHandler,
}) => {
  return (
    <>
      {isEditModalOpen && (
        <TaskModal onClose={closeEditModal} changedValue={isEditModalOpen} task={task} />
      )}
      {isAddSubtaskModalOpen && (
        <SubtaskModal
          {...task}
          changedValue={isAddSubtaskModalOpen}
          onClose={closeAddSubtaskModal}
          onSubmit={onAddSubtaskHandler}
        />
      )}
      {isQuestionModalOpen && (
        <QuestionModal
          changedValue={isQuestionModalOpen}
          handler={deleteHandler}
          onClose={closeQuestionModal}
          task={task}
          onSubmit={onDeleteTaskHandler}
          type={"delete"}
          isLoading={isLoading}
          text={"Are you sure you want to move to trash the selected task?"}
          submitButtonText={"Move to trash"}
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

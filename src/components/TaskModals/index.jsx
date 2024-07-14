import AddSubtask from "@/ui/Modals/AddSubtask";
import QuestionModal from "@/ui/Modals/QuestionModal";
import StageModal from "@/ui/Modals/StageModal";
import TaskModal from "@/ui/Modals/TaskModal";

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
        <AddSubtask
          changedValue={isAddSubtaskModalOpen}
          onClose={closeAddSubtaskModal}
          onSubmit={onAddSubtaskHandler}
          taskId={task._id}
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

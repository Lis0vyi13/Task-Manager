import QuestionModal from "@/ui/Modals/QuestionModal";
import EditUser from "@/ui/Modals/EditUser";

const EditDeleteModals = ({
  user,
  isEditModalOpen,
  closeEditModal,
  isQuestionModalOpen,
  closeQuestionModal,
  handler,
  isLoading,
}) => {
  return (
    <>
      {isEditModalOpen && (
        <EditUser onClose={closeEditModal} changedValue={isEditModalOpen} user={user} />
      )}
      {isQuestionModalOpen && (
        <QuestionModal
          changedValue={isQuestionModalOpen}
          onClose={closeQuestionModal}
          handler={handler}
          isLoading={isLoading}
          type={"delete"}
          text={"Are you sure you want to delete current user?"}
          submitButtonText={"Delete"}
        />
      )}
    </>
  );
};

export default EditDeleteModals;

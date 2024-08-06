import useAnimatedToggle from "@/hooks/useAnimatedToggle";
import useModal from "@/hooks/useModal";
import useUser from "@/hooks/useUser";
import { isTeamMember } from "@/utils/isTeamMember";

import { FaExchangeAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";

const useTaskDetails = ({ task }) => {
  const user = useUser();
  const isMember = isTeamMember(task, user);
  const { isOpened, isClosing, handleToggle, handleClose } = useAnimatedToggle();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal({
    setItem: () => {},
  });
  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal({
    setItem: () => {},
  });
  const [isStageModalOpen, openStageModal, closeStageModal] = useModal({
    setItem: () => {},
  });
  const [isAddSubtaskModalOpen, openAddSubtaskModal, closeAddSubtaskModal] = useModal({
    setItem: () => {},
  });
  const OPTIONS = [
    [
      {
        icon: { Icon: MdEdit, color: "" },
        title: "Edit",
        permission: user?.isAdmin || task?.createdBy === user?._id,
        onClick: openEditModal,
      },
      {
        icon: { Icon: IoMdAdd, color: "" },
        title: "Add sub task",
        permission: user?.isAdmin || task?.createdBy === user?._id,
        onClick: openAddSubtaskModal,
      },
      {
        icon: { Icon: FaExchangeAlt, color: "" },
        title: "Change stage",
        permission: user?.isAdmin || isMember || task?.createdBy === user?._id,
        onClick: openStageModal,
      },
    ],
    [
      {
        icon: { Icon: MdDelete, color: "red" },
        title: "Delete",
        permission: user?.isAdmin || task?.createdBy === user?._id,
        onClick: openQuestionModal,
      },
    ],
  ];
  return {
    OPTIONS,
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
    isEditModalOpen,
    closeEditModal,
    isAddSubtaskModalOpen,
    closeAddSubtaskModal,
    isQuestionModalOpen,
    closeQuestionModal,
    isStageModalOpen,
    closeStageModal,
  };
};

export default useTaskDetails;

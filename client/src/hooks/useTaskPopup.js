import useAnimatedToggle from "./useAnimatedToggle";
import useUser from "./useUser";
import useModal from "./useModal";
import useTaskDetailHandler from "./useTaskDetailHandler";

import { FaExchangeAlt, FaFolderOpen } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { isTeamMember } from "@/utils/isTeamMember";

const useTaskPopup = ({ task, setItemHandler = () => {} }) => {
  const { isOpened, isClosing, handleToggle, handleClose } = useAnimatedToggle();

  const [isEditModalOpen, openEditModal, closeEditModal] = useModal({
    setItem: setItemHandler,
  });
  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal({
    setItem: setItemHandler,
  });
  const [isAddSubtaskModalOpen, openAddSubtaskModal, closeAddSubtaskModal] = useModal({
    setItem: () => {},
  });

  const [isStageModalOpen, openStageModal, closeStageModal] = useModal({
    setItem: () => {},
  });

  const navigate = useTaskDetailHandler();
  const user = useUser();
  const isCreator = task?.createdBy === user?._id;
  const isMember = isTeamMember(task, user);

  const TASK_MORE_OPTIONS = [
    [
      {
        icon: { Icon: FaFolderOpen, color: "" },
        title: "Open task",
        permission: false,
        onClick: () => navigate(task?._id),
      },
      {
        icon: { Icon: MdEdit, color: "" },
        title: "Edit",
        permission: !user?.isAdmin && !isCreator,
        onClick: openEditModal,
      },
      {
        icon: { Icon: IoMdAdd, color: "" },
        title: "Add sub task",
        permission: !user?.isAdmin && !isCreator,
        onClick: openAddSubtaskModal,
      },
      {
        icon: { Icon: FaExchangeAlt, color: "" },
        title: "Change stage",
        permission: !user?.isAdmin && !isCreator && !isMember,
        onClick: openStageModal,
      },
    ],
    [
      {
        icon: { Icon: MdDelete, color: "red" },
        title: "Delete",
        permission: !user?.isAdmin && !isCreator,
        onClick: openQuestionModal,
      },
    ],
  ];
  return {
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
    openQuestionModal,
    openEditModal,
  };
};

export default useTaskPopup;

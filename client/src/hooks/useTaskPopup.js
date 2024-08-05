import useAnimatedToggle from "./useAnimatedToggle";
import useModal from "./useModal";
import useTaskDetailHandler from "./useTaskDetailHandler";

import { FaExchangeAlt, FaFolderOpen } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

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

  const TASK_MORE_OPTIONS = [
    [
      {
        icon: { Icon: FaFolderOpen, color: "" },
        title: "Open task",
        permission: false,
        onClick: () => navigate(task._id),
      },
      {
        icon: { Icon: MdEdit, color: "" },
        title: "Edit",
        permission: false,
        onClick: openEditModal,
      },
      {
        icon: { Icon: IoMdAdd, color: "" },
        title: "Add sub task",
        permission: false,
        onClick: openAddSubtaskModal,
      },
      {
        icon: { Icon: FaExchangeAlt, color: "" },
        title: "Change stage",
        permission: false,
        onClick: openStageModal,
      },
    ],
    [
      {
        icon: { Icon: MdDelete, color: "red" },
        title: "Delete",
        permission: true,
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

import useAnimatedToggle from "./useAnimatedToggle";
import useModal from "./useModal";
import useTaskDetailHandler from "./useTaskDetailHandler";

import { FaExchangeAlt, FaFolderOpen } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const useTaskPopup = ({ task }) => {
  const { isOpened, isClosing, handleToggle, handleClose } =
    useAnimatedToggle();

  const [isEditModalOpen, openEditModal, closeEditModal] = useModal({
    setItem: () => {},
  });
  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal(
    {
      setItem: () => {},
    },
  );
  const [isAddSubtaskModalOpen, openAddSubtaskModal, closeAddSubtaskModal] =
    useModal({
      setItem: () => {},
    });

  const [isStageModalOpen, openStageModal, closeStageModal] = useModal({
    setItem: () => {},
  });

  const navigate = useTaskDetailHandler();

  const TASK_MORE_OPTIONS = [
    [
      {
        icon: { Icon: FaFolderOpen, color: "#000" },
        title: "Open task",
        permission: false,
        onClick: () => navigate(task._id),
      },
      {
        icon: { Icon: MdEdit, color: "#000" },
        title: "Edit",
        permission: false,
        onClick: openEditModal,
      },
      {
        icon: { Icon: IoMdAdd, color: "#000" },
        title: "Add sub task",
        permission: false,
        onClick: openAddSubtaskModal,
      },
      {
        icon: { Icon: FaExchangeAlt, color: "#000" },
        title: "Change stage",
        permission: false,
        onClick: openStageModal,
      },
    ],
    [
      {
        icon: { Icon: MdDelete, color: "red" },
        title: "Delete",
        permission: false,
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
  };
};

export default useTaskPopup;

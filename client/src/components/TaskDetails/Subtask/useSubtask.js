import { useCallback, useMemo } from "react";
import useAnimatedToggle from "@/hooks/useAnimatedToggle";
import useModal from "@/hooks/useModal";

import { MdDelete, MdEdit } from "react-icons/md";

const useSubtask = () => {
  const doneHandler = useCallback(() => {}, []);
  const { isOpened, isClosing, handleToggle, handleClose } =
    useAnimatedToggle();

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
          permission: false,
          onClick: openEditModal,
        },
      ],
      [
        {
          icon: { Icon: MdDelete, color: "red" },
          title: "Delete",
          permission: false,
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

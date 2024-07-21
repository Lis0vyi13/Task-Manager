import { useMemo } from "react";
import useActions from "@/hooks/useActions";
import useAnimatedToggle from "@/hooks/useAnimatedToggle";
import useModal from "@/hooks/useModal";
import useUser from "@/hooks/useUser";

import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const useAvatar = () => {
  const { isOpened, isClosing, handleToggle, handleClose } =
    useAnimatedToggle();
  const user = useUser();
  const { logOut } = useActions();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal({
    setItem: () => {},
  });
  const [
    isChangePasswordModalOpen,
    openChangePasswordModal,
    closeChangePasswordModal,
  ] = useModal({
    setItem: () => {},
  });

  const userAvatarButtons = useMemo(
    () => [
      {
        name: "Profile",
        Icon: FaUser,
        handler: openEditModal,
      },
      {
        name: "Change password",
        Icon: RiLockPasswordFill,
        handler: openChangePasswordModal,
      },
      {
        name: "Logout",
        Icon: IoLogOut,
        handler: () => logOut(),
        type: "button",
        color: "#f44336",
      },
    ],
    [logOut, openChangePasswordModal, openEditModal],
  );
  return {
    user,
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
    userAvatarButtons,
    isEditModalOpen,
    closeEditModal,
    isChangePasswordModalOpen,
    closeChangePasswordModal,
  };
};

export default useAvatar;

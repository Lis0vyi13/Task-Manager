import { memo } from "react";

import getInitials from "@/utils/getInitials";
import useAvatar from "./useAvatar";

import Popup from "@/ui/Popup";
import UserPopupItem from "./UserPopupItem";
import EditProfile from "@/ui/Modals/EditProfile";
import ChangePassword from "@/ui/Modals/ChangePassword";

import styles from "./UserAvatar.module.scss";

const UserAvatar = memo(() => {
  const {
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
  } = useAvatar();

  return (
    <div className={styles.avatar}>
      <button
        style={{ backgroundColor: user?.avatar || "#2744e5" }}
        onClick={handleToggle}
        className={styles.button}
      >
        {getInitials(user?.name)}
      </button>

      {isOpened && (
        <Popup
          style={{ padding: "10px 0px" }}
          isClosing={isClosing}
          handleClose={handleClose}
          desktopStyle
        >
          {userAvatarButtons.map((btn) => (
            <UserPopupItem key={btn.name} {...btn} />
          ))}
        </Popup>
      )}
      {isEditModalOpen && (
        <EditProfile changedValue={isEditModalOpen} onClose={closeEditModal} />
      )}
      {isChangePasswordModalOpen && (
        <ChangePassword
          changedValue={isChangePasswordModalOpen}
          onClose={closeChangePasswordModal}
        />
      )}
    </div>
  );
});

export default UserAvatar;

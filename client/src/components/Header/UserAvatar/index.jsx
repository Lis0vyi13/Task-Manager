import { memo, useEffect, useState } from "react";

import getInitials from "@/utils/getInitials";
import useAvatar from "./useAvatar";

import Popup from "@/ui/Popup";
import UserPopupItem from "./UserPopupItem";
import EditProfile from "@/ui/Modals/EditProfile";
import ChangePassword from "@/ui/Modals/ChangePassword";

import styles from "./UserAvatar.module.scss";
import isColorLight from "@/utils/isColorLight";

const UserAvatar = memo(({ disabled, avatarColor }) => {
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

  const [textColor, setTextColor] = useState("#fff");
  useEffect(() => {
    setTextColor(isColorLight(disabled ? avatarColor : user?.avatarColor) ? "#000" : "#fff");
  }, [avatarColor, disabled, user]);

  return (
    <div className={styles.avatar}>
      <button
        style={{
          backgroundColor: user?.avatar ? "transparent" : avatarColor || user?.avatarColor,
          color: textColor,
          cursor: disabled ? "auto" : "pointer",
        }}
        onClick={handleToggle}
        className={styles.button}
        disabled={disabled}
      >
        {user?.avatar ? (
          <div className={styles.avatarImg}>
            <img src={user?.avatar} alt="user avatar" />
          </div>
        ) : (
          getInitials(user?.name, user?.surname)
        )}
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
      {isEditModalOpen && <EditProfile changedValue={isEditModalOpen} onClose={closeEditModal} />}
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

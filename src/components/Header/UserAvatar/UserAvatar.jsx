import { memo } from "react";

import useAnimatedToggle from "@/hooks/useAnimatedToggle";

import getInitials from "@/utils/getInitials";

import Popup from "@/ui/Popup/Popup";

import { userAvatarButtons } from "@/constants";

import styles from "./UserAvatar.module.scss";
import UserPopupItem from "./UserPopupItem/UserPopupItem";

const UserAvatar = memo(({ fullname }) => {
  const { isOpened, isClosing, handleToggle, handleClose } =
    useAnimatedToggle();

  return (
    <div className={styles.avatar}>
      <button onClick={handleToggle} className={styles.button}>
        {fullname ? getInitials(fullname) : "OL"}
      </button>

      {isOpened && (
        <Popup
          style={{ padding: "10px 0px" }}
          isClosing={isClosing}
          handleClose={handleClose}
        >
          {userAvatarButtons.map((btn) => (
            <UserPopupItem key={btn.name} {...btn} />
          ))}
        </Popup>
      )}
    </div>
  );
});

export default UserAvatar;

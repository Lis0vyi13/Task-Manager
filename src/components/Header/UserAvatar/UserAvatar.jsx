import { memo } from "react";

import useAnimatedToggle from "@/hooks/useAnimatedToggle";
import useUser from "@/hooks/useUser";

import getInitials from "@/utils/getInitials";

import Popup from "@/ui/Popup/Popup";

import UserPopupItem from "./UserPopupItem/UserPopupItem";

import { userAvatarButtons } from "@/constants";

import styles from "./UserAvatar.module.scss";

const UserAvatar = memo(({ fullname }) => {
  const { isOpened, isClosing, handleToggle, handleClose } =
    useAnimatedToggle();
  const user = useUser();

  return (
    <div className={styles.avatar}>
      <button
        style={{ backgroundColor: user.avatar || "#2744e5" }}
        onClick={handleToggle}
        className={styles.button}
      >
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

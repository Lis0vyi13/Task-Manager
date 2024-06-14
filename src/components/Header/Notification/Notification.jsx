import { memo } from "react";

import useAnimatedToggle from "@/hooks/useAnimatedToggle";

import Popup from "@/ui/Popup/Popup";

import Alert from "./Alert/Alert";

import { notifications } from "@/constants";

import { IoIosNotificationsOutline } from "react-icons/io";

import styles from "./Notification.module.scss";

const Notification = memo(() => {
  const { isOpened, isClosing, handleToggle, handleClose } =
    useAnimatedToggle();

  return (
    <div className={styles.notificationWrapper}>
      <button onClick={handleToggle} className={styles.notification}>
        <IoIosNotificationsOutline className={styles.notificationButton} />
        <div className={styles.notificationAmount}>
          {notifications.length > 99 ? "99+" : notifications.length}
        </div>
      </button>
      {isOpened && (
        <Popup
          className={styles.popup}
          isClosing={isClosing}
          handleClose={handleClose}
        >
          <div className={styles.alerts}>
            {notifications.map((notif) => (
              <Alert key={notif.id} {...notif} />
            ))}
          </div>
          <div className={styles.popupButtons}>
            <button className={styles.button} onClick={handleClose}>
              Cancel
            </button>
            <button className={styles.button}>Mark all Read</button>
          </div>
        </Popup>
      )}
    </div>
  );
});

export default Notification;

import { memo, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  useGetNotificationsQuery,
  useMarkNotificationMutation,
} from "@/redux/features/user/UserSlice";
import useAnimatedToggle from "@/hooks/useAnimatedToggle";
import useModal from "@/hooks/useModal";

import Popup from "@/ui/Popup";
import Notification from "./Notification";
import Loader from "@/ui/Loader";
import NotificationModal from "@/ui/Modals/NotificationModal";

import { IoIosNotificationsOutline } from "react-icons/io";

import styles from "./Notifications.module.scss";

const Notifications = memo(() => {
  const { isOpened, isClosing, handleToggle, handleClose } = useAnimatedToggle();
  const [notification, setNotification] = useState({});
  const { data: notifications, refetch } = useGetNotificationsQuery();
  const [markAllNotifications, { isLoading }] = useMarkNotificationMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const [isNotificationModalOpen, openNotificationModal, closeNotificationModal] = useModal({
    setItem: () => {},
  });

  const notificationOptions = {
    onClick: openNotificationModal,
    setNotification,
  };

  const notificationModalOptions = {
    notification,
    changedValue: isNotificationModalOpen,
    handleClose: closeNotificationModal,
  };

  return (
    <div className={styles.notificationWrapper}>
      <button onClick={handleToggle} className={styles.notification}>
        <IoIosNotificationsOutline className={styles.notificationButton} />
        {notifications?.length > 0 && (
          <div className={styles.notificationAmount}>
            {notifications?.length > 9 ? "9+" : notifications?.length}
          </div>
        )}
      </button>
      {isOpened && (
        <Popup
          className={styles.popup}
          isClosing={isClosing}
          handleClose={handleClose}
          desktopStyle
        >
          <div
            className={`${styles.alerts} ${notifications?.length === 0 ? styles.emptyAlerts : ""}`}
          >
            {isLoading ? (
              <div className={styles.loader}>
                <Loader />
              </div>
            ) : notifications?.length > 0 ? (
              notifications.map((notif) => (
                <Notification key={notif?._id} {...notif} {...notificationOptions} />
              ))
            ) : (
              <span className={styles.notFound}>No messages found</span>
            )}
          </div>
          <div className={styles.popupButtons}>
            <button className={styles.button} onClick={handleClose}>
              Cancel
            </button>
            <button
              onClick={async () => {
                try {
                  await markAllNotifications({
                    readType: "all",
                    data: {},
                  }).unwrap();
                } catch (error) {
                  toast.error(error.data.message);
                }
              }}
              disabled={notifications?.length === 0}
              className={styles.button}
            >
              Mark all Read
            </button>
          </div>
        </Popup>
      )}
      {isNotificationModalOpen && <NotificationModal options={notificationModalOptions} />}
    </div>
  );
});

export default Notifications;

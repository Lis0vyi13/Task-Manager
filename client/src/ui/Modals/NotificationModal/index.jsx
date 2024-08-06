import { toast } from "sonner";
import { useMarkNotificationMutation } from "@/redux/features/user/UserSlice";

import Modal from "../Modal";

import { LuBellRing } from "react-icons/lu";
import styles from "./NotificationModal.module.scss";

const NotificationModal = ({ options }) => {
  const { notification, changedValue, handleClose } = options;
  const [markNotification, { isLoading }] = useMarkNotificationMutation();

  const onSubmit = async () => {
    try {
      await markNotification({ id: notification?._id }).unwrap();
      handleClose();
      toast.success("Marked as Read");
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
    <Modal changedValue={changedValue} noCross onClose={() => handleClose()} onSubmit={onSubmit}>
      <section className={styles.notificationModal}>
        <div className={`${styles.content}`}>
          <div className={styles.contentTop}>
            <div className={styles.icon}>
              <LuBellRing />
            </div>
            <h4 className={styles.title}>Alert</h4>
            <span className={styles.daysAgo}>{notification.time}</span>
          </div>
          <p className={styles.message}>{notification.text}</p>
        </div>
        <div className={styles.popupButtons}>
          <button className={styles.button} onClick={() => handleClose()}>
            Cancel
          </button>
          <button disabled={isLoading} onClick={onSubmit} className={styles.button}>
            Mark as Read
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default NotificationModal;

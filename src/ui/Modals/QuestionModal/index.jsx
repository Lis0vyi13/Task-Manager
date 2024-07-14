import { useCallback } from "react";

import Modal from "../Modal";
import ModalButtons from "@/ui/ModalButtons";

import { FaQuestion } from "react-icons/fa";
import styles from "./QuestionModal.module.scss";

const modalStyles = {
  delete: {
    circle: styles.deleteCircle,
    icon: styles.deleteIcon,
    submitButton: styles.deleteSubmitButton,
  },
  restore: {
    circle: styles.restoreCircle,
    icon: styles.restoreIcon,
    submitButton: styles.restoreSubmitButton,
  },
};

const QuestionModal = ({
  changedValue,
  onClose,
  // task,
  // user,
  text,
  type,
  submitButtonText,
}) => {
  // const data = task || user;
  const onSubmit = useCallback(() => {}, []);

  return (
    <Modal
      changedValue={changedValue}
      noCross
      onSubmit={onSubmit}
      onClose={onClose}
    >
      <section className={`${"modalWrapper"} ${styles.modal}`}>
        <div className={`${styles.circle} ${modalStyles[type]?.circle || ""}`}>
          <FaQuestion
            className={`${styles.icon} ${modalStyles[type]?.icon || ""}`}
          />
        </div>
        <p className={styles.text}>{text}</p>
        <ModalButtons
          onClose={onClose}
          onSubmit={onSubmit}
          submitButtonText={submitButtonText}
          submitButtonClassName={modalStyles[type]?.submitButton || ""}
        />
      </section>
    </Modal>
  );
};

export default QuestionModal;

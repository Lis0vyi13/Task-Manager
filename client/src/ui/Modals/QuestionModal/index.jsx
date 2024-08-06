import Modal from "../Modal";
import ModalButtons from "@/ui/ModalButtons";
import LoaderOnLoading from "@/components/LoaderOnLoading";

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
  handler,
  text,
  type,
  submitButtonText,
  onSubmit,
  isLoading,
}) => {
  return (
    <Modal changedValue={changedValue} noCross onSubmit={onSubmit} onClose={onClose}>
      <LoaderOnLoading isLoading={isLoading} />

      <section className={`${"modalWrapper"} ${styles.modal}`}>
        <div className={`${styles.circle} ${modalStyles[type]?.circle || ""}`}>
          <FaQuestion className={`${styles.icon} ${modalStyles[type]?.icon || ""}`} />
        </div>
        <p className={styles.text}>{text}</p>
        <ModalButtons
          disabled={isLoading}
          onSubmit={async () => {
            await handler();
            onClose();
          }}
          onClose={onClose}
          containerClassName={styles.buttonsContainer}
          submitButtonText={submitButtonText}
          submitButtonClassName={modalStyles[type]?.submitButton || ""}
        />
      </section>
    </Modal>
  );
};

export default QuestionModal;

import Button from "../Button";
import styles from "./ModalButtons.module.scss";

const ModalButtons = ({
  onClose,
  cancelButtonClassName,
  submitButtonClassName,
  cancelButtonText = "Cancel",
  submitButtonText = "Submit",
  containerClassName,
  onSubmit,
}) => {
  return (
    <div className={`${styles.buttons} ${containerClassName}`}>
      <Button
        type={"button"}
        onClick={onClose}
        className={`${styles.cancelButton} ${cancelButtonClassName}`}
      >
        {cancelButtonText}
      </Button>
      <Button
        onClick={onSubmit}
        className={`${styles.submitButton} ${submitButtonClassName}`}
      >
        {submitButtonText}
      </Button>
    </div>
  );
};

export default ModalButtons;

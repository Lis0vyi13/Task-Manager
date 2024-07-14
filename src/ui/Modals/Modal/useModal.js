import { useCallback, useEffect, useRef } from "react";

const useModal = ({ onClose, onSubmit, changedValue, styles }) => {
  const modalRef = useRef();

  const onEscapeHandler = useCallback(
    (e) => {
      if (e.key !== "Escape") return;
      onClose();
    },
    [onClose],
  );
  const onEnterHandler = useCallback(
    (e) => {
      if (e.key !== "Enter") return;

      onSubmit();
    },
    [onSubmit],
  );

  useEffect(() => {
    const modal = modalRef.current;
    document.addEventListener("keydown", onEscapeHandler);
    document.addEventListener("keydown", onEnterHandler);
    if (changedValue) {
      setTimeout(() => {
        modal?.classList.add(styles.visible);
      }, 0);
    }

    return () => {
      if (modal) {
        modal.classList.remove(styles.visible);
      }
      document.removeEventListener("keydown", onEscapeHandler);
      document.removeEventListener("keydown", onEnterHandler);
    };
  }, [changedValue, onEnterHandler, onEscapeHandler, styles.visible]);
  return { modalRef };
};

export default useModal;

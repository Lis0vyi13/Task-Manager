import { useCallback, useEffect, useRef } from "react";
import "wicg-inert";

const useModal = ({ onClose, onSubmit, changedValue, styles }) => {
  const modalRef = useRef();
  const modalContentRef = useRef();
  const rootElement = document.querySelector("#root");

  const onEscapeHandler = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  const onEnterHandler = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onSubmit();
      }
    },
    [onSubmit],
  );

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === modalRef.current && document.activeElement.tagName != "INPUT") {
        onClose();
        rootElement.inert = undefined;
      }
    },
    [onClose, rootElement],
  );

  useEffect(() => {
    const modal = modalRef.current;

    if (changedValue && !rootElement.inert) {
      rootElement.inert = true;
      modal?.classList.add(styles.visible);
    }

    document.addEventListener("keydown", onEscapeHandler);
    document.addEventListener("keydown", onEnterHandler);

    return () => {
      if (modal) {
        modal.classList.remove(styles.visible);
      }
      rootElement.inert = undefined;
      document.removeEventListener("keydown", onEscapeHandler);
      document.removeEventListener("keydown", onEnterHandler);
    };
  }, [changedValue, onEnterHandler, onEscapeHandler, rootElement, styles.visible]);

  return { modalRef, modalContentRef, handleOverlayClick };
};

export default useModal;

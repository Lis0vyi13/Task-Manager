import { useCallback } from "react";

const useModalHandlers = ({ onClose, reset }) => {
  const onCloseHandler = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  const onSubmitHandler = useCallback(() => {
    reset();
    onCloseHandler();
  }, [onCloseHandler, reset]);

  return { onSubmitHandler, onCloseHandler };
};

export default useModalHandlers;

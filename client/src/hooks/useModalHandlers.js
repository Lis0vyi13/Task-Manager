import { useCallback } from "react";

const useModalHandlers = ({ onClose, reset }) => {
  const onSubmitHandler = useCallback(
    (data) => {
      console.log(data);
      reset();
    },
    [reset],
  );
  const onCloseHandler = useCallback(() => {
    onClose();
    reset();
  }, [onClose, reset]);

  return { onSubmitHandler, onCloseHandler };
};

export default useModalHandlers;

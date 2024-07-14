import { useCallback, useState } from "react";

const useQuestionModal = ({ setItem }) => {
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

  const openQuestionModal = useCallback(
    (data) => {
      setItem(data);
      setIsQuestionModalOpen(true);
    },
    [setItem],
  );

  const closeQuestionModal = useCallback(() => {
    setIsQuestionModalOpen(false);
    setItem(null);
  }, [setItem]);

  return { isQuestionModalOpen, openQuestionModal, closeQuestionModal };
};

export default useQuestionModal;

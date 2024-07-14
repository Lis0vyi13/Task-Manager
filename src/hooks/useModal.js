import { useCallback, useState } from "react";

const useModal = ({ setItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEditModal = useCallback(
    (data) => {
      setItem(data);
      setIsModalOpen(true);
    },
    [setItem],
  );

  const closeEditModal = useCallback(() => {
    setIsModalOpen(false);
    setItem(null);
  }, [setItem]);

  return [isModalOpen, openEditModal, closeEditModal];
};

export default useModal;

import { useCallback, useEffect, useState } from "react";

const useTaskDetails = ({ task }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (task.assets && task.assets.length > 0) {
      const imagePromises = task?.assets?.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [task.assets]);

  const handleImageClick = useCallback((src) => {
    setSelectedImage(src);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return { selectedImage, loading, handleImageClick, handleCloseModal };
};

export default useTaskDetails;

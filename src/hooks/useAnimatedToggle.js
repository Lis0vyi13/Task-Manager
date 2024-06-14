import { useState } from "react";

const useAnimatedToggle = (initialState = false) => {
  const [isOpened, setIsOpened] = useState(initialState);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    if (isOpened) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpened(false);
        setIsClosing(false);
      }, 200);
    } else {
      setIsOpened(true);
    }
  };

  const handleClose = () => {
    if (isOpened) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpened(false);
        setIsClosing(false);
      }, 200);
    }
  };

  return { isOpened, isClosing, handleToggle, handleClose };
};

export default useAnimatedToggle;

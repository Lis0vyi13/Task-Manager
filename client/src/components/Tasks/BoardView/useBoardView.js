import { useCallback, useMemo, useState } from "react";

const useBoardView = () => {
  const stages = useMemo(() => ["todo", "in progress", "completed"], []);
  const initialExpandState = useMemo(() => stages.map(() => true), [stages]);
  const [isExpandArray, setIsExpandArray] = useState(initialExpandState);

  const onTitleClickHandler = useCallback((index) => {
    setIsExpandArray((prevState) =>
      prevState.map((isExpand, i) => (i === index ? !isExpand : isExpand)),
    );
  }, []);

  return {
    stages,
    isExpandArray,
    setIsExpandArray,
    onTitleClickHandler,
  };
};

export default useBoardView;

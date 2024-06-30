import { useMemo, useState } from "react";
import { TASK_TYPE } from "@/constants";

const useBoardView = () => {
  const stages = useMemo(() => ["todo", "in progress", "completed"], []);
  const titles = [
    { name: "To do", stage: "todo", color: TASK_TYPE.todo },
    {
      name: "In progress",
      stage: "in progress",
      color: TASK_TYPE["in progress"],
    },
    { name: "Completed", stage: "completed", color: TASK_TYPE.completed },
  ];

  const initialExpandState = stages.map(() => true);
  const [isExpandArray, setIsExpandArray] = useState(initialExpandState);

  const onTitleClickHandler = (index) => {
    setIsExpandArray((prevState) =>
      prevState.map((isExpand, i) => (i === index ? !isExpand : isExpand)),
    );
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return {
    stages,
    titles,
    isExpandArray,
    setIsExpandArray,
    onTitleClickHandler,
    cardVariants,
  };
};

export default useBoardView;

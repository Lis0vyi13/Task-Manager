import { useMemo } from "react";
import getProgressColor from "@/utils/getProgressColor";

import useModal from "@/hooks/useModal";

const useTaskDetailsLeft = ({ task }) => {
  const memoizedTask = useMemo(() => task, [task]);

  const { subTasks = [] } = memoizedTask || {};

  const doneTasksLength = useMemo(() => subTasks?.filter((task) => task?.done).length, [subTasks]);
  const subtasksProgress = useMemo(
    () => (doneTasksLength > 0 ? Math.round((doneTasksLength / subTasks.length) * 100) : 0),
    [doneTasksLength, subTasks.length],
  );

  const progressColor = useMemo(() => getProgressColor(subtasksProgress), [subtasksProgress]);

  const [isAddSubtaskModalOpen, openAddSubtaskModal, closeAddSubtaskModal] = useModal({
    setItem: () => {},
  });

  return {
    progressColor,
    subtasksProgress,
    subTasks,
    openAddSubtaskModal,
    isAddSubtaskModalOpen,
    closeAddSubtaskModal,
  };
};

export default useTaskDetailsLeft;

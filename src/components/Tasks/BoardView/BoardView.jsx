import { useMemo, useState } from "react";

import TaskStage from "../../TaskStage/TaskStage";
import TasksTitle from "../TasksTitle/TasksTitle";

import { TASK_TYPE } from "@/constants";

import styles from "./BoardView.module.scss";

const BoardView = ({ tasks }) => {
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

  return (
    <section className={styles.boardView}>
      {stages.map((stage, i) => (
        <div key={stage}>
          {titles
            .filter((title) => title.stage === stage)
            .map((title) => (
              <TasksTitle
                isExpand={isExpandArray[i]}
                handler={() => onTitleClickHandler(i)}
                {...title}
                key={title.name}
              />
            ))}
          <TaskStage isExpand={isExpandArray[i]} stage={stage} tasks={tasks} />
        </div>
      ))}
    </section>
  );
};

export default BoardView;

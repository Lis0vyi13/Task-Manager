import { useMemo, useState } from "react";

import { motion } from "framer-motion";

import TaskStage from "@/components/Tasks/TaskStage";
import TasksTitle from "@/components/TasksTitle";

import { fadeSlideUpVariants, TASK_TYPE } from "@/constants";

import styles from "./BoardView.module.scss";

const BoardView = ({ tasks }) => {
  const stages = useMemo(() => ["todo", "in progress", "completed"], []);
  const initialExpandState = useMemo(() => stages.map(() => true), [stages]);
  const [isExpandArray, setIsExpandArray] = useState(initialExpandState);

  const titles = [
    { name: "To do", stage: "todo", color: TASK_TYPE.todo },
    {
      name: "In progress",
      stage: "in progress",
      color: TASK_TYPE["in progress"],
    },
    { name: "Completed", stage: "completed", color: TASK_TYPE.completed },
  ];

  const onTitleClickHandler = (index) => {
    setIsExpandArray((prevState) =>
      prevState.map((isExpand, i) => (i === index ? !isExpand : isExpand)),
    );
  };

  return (
    <section className={styles.boardView}>
      {stages.map((stage, i) => (
        <motion.div
          key={stage}
          initial="hidden"
          whileInView="visible"
          variants={fadeSlideUpVariants}
          viewport={{ once: true }}
        >
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
        </motion.div>
      ))}
    </section>
  );
};

export default BoardView;

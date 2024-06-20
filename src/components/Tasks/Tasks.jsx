import { useState } from "react";

import Title from "@/ui/Title/Title";
import Button from "@/ui/Button/Button";

import Tabs from "../Tabs/Tabs";
import TasksTitle from "./TasksTitle/TasksTitle";
import BoardView from "./BoardView/BoardView";

import { TASK_TYPE, taskTabs, tasks } from "@/constants";

import styles from "./Tasks.module.scss";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(1);

  const titles = [
    { name: "To do", color: TASK_TYPE.todo },
    { name: "In progress", color: TASK_TYPE["in progress"] },
    { name: "Completed", color: TASK_TYPE.completed },
  ];

  return (
    <section className={styles.tasksWrapper}>
      <header className={styles.header}>
        <Title>Tasks</Title>
        <Button className={styles.button}>+ Create task</Button>
      </header>
      <main className={styles.main}>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          data={taskTabs}
        />
        <div className={styles.tasksTitles}>
          {titles.map((title) => (
            <TasksTitle {...title} key={title.name}>
              {title.name}
            </TasksTitle>
          ))}
        </div>
        <div className={styles.boardViewTasks}>
          <BoardView tasks={tasks} />
        </div>
      </main>
    </section>
  );
};

export default Tasks;

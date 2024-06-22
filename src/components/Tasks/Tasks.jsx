import { useState } from "react";

import Title from "@/ui/Title/Title";
import Button from "@/ui/Button/Button";

import Tabs from "../Tabs/Tabs";

import { tasksView, tasks } from "@/constants";

import styles from "./Tasks.module.scss";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(1);

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
          data={tasksView}
        />

        <div className={styles.tasks}>
          {tasksView
            .filter((tab) => tab.id === activeTab)
            .map(({ Component, id }) => (
              <Component key={id} tasks={tasks} />
            ))}
        </div>
      </main>
    </section>
  );
};

export default Tasks;

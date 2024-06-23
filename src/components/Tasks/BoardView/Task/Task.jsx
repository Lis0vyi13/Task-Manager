import { IoIosMore } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { MdOutlineComment, MdAttachFile } from "react-icons/md";

import Team from "@/components/Team/Team";
import Subtask from "./Subtask/Subtask";

import {
  PRIOTITY_STYLES,
  TASK_PRIORITY_ICONS,
  TASK_TYPE,
  formatDate,
} from "@/constants";

import styles from "./Task.module.scss";
import useUser from "@/hooks/useUser";

const Task = ({
  priority,
  stage,
  title,
  date,
  activities,
  assets,
  subTasks,
  team,
}) => {
  const user = useUser();

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <div
              style={{ color: PRIOTITY_STYLES[priority] }}
              className={styles.priority}
            >
              {TASK_PRIORITY_ICONS[priority]}
              <p className={styles.priorityText}>{priority} priority</p>
            </div>
            <div className={styles.taskTitle}>
              <div
                style={{ backgroundColor: TASK_TYPE[stage] }}
                className={styles.circle}
              />
              <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.date}>{formatDate(new Date(date))}</div>
          </div>
          <div className={styles.headerMoreIcon}>
            <IoIosMore />
          </div>
        </header>
        <main className={styles.main}>
          <article className={styles.details}>
            <div title="Commentary" className={styles.commentary}>
              <MdOutlineComment />
              <span>{activities.length}</span>
            </div>
            <div title="Assets" className={styles.assets}>
              <MdAttachFile />
              <span>{assets.length}</span>
            </div>
            <div title={"Subtasks"} className={styles.subtasks}>
              <FaList />
              <span>0/{subTasks.length}</span>
            </div>
          </article>
          <article className={styles.teamWrapper}>
            <Team
              infoClassName={styles.userInfo}
              side={"left"}
              className={styles.team}
              team={team}
            />
          </article>
        </main>
        <footer className={styles.footer}>
          <section className={styles.subtasksWrapper}>
            {subTasks.map((subtask, i) => (
              <Subtask index={i} {...subtask} key={subtask._id} />
            ))}
          </section>
          <button
            disabled={user.isAdmin}
            className={`${styles.btnAddSubtask} ${
              user.isAdmin ? "" : styles.disabled
            }`}
          >
            <span>+</span> <p>Add subtask</p>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Task;

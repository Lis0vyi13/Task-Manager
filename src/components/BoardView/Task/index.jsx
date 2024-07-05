import useTaskDetailHandler from "@/hooks/useTaskDetailHandler";
import useUser from "@/hooks/useUser";

import Subtask from "./Subtask";
import Team from "@/components/Team";
import StageCircle from "@/components/StageCircle";
import PriorityIndicator from "@/components/PriorityIndicator";

import { IoIosMore } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { MdOutlineComment, MdAttachFile } from "react-icons/md";

import { formatDate } from "@/constants";

import styles from "./Task.module.scss";

const Task = ({
  priority,
  stage,
  title,
  date,
  activities,
  assets,
  subTasks,
  team,
  _id,
}) => {
  const user = useUser();

  const navigate = useTaskDetailHandler();

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.headerTop}>
              <PriorityIndicator withAddition priority={priority} />
              <div className={styles.headerMoreIcon}>
                <IoIosMore />
              </div>
            </div>
            <div onClick={() => navigate(_id)} className={styles.taskTitle}>
              <StageCircle stage={stage} />
              <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.date}>{formatDate(new Date(date))}</div>
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.details}>
            <article title="Commentary" className={styles.commentary}>
              <MdOutlineComment />
              <span>{activities.length}</span>
            </article>
            <article title="Assets" className={styles.assets}>
              <MdAttachFile />
              <span>{assets.length}</span>
            </article>
            <article title={"Subtasks"} className={styles.subtasks}>
              <FaList />
              <span>0/{subTasks.length}</span>
            </article>
          </section>
          <section>
            <Team
              infoClassName={styles.userInfo}
              className={styles.team}
              team={team}
            />
          </section>
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

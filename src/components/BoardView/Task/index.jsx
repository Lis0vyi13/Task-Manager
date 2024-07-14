import useTask from "./useTask";

import TaskModals from "@/components/TaskModals";
import Popup from "@/ui/Popup";
import Team from "@/components/Team";
import StageCircle from "@/components/StageCircle";
import PriorityIndicator from "@/components/PriorityIndicator";
import More from "@/components/More";
import Subtask from "./Subtask";
import PopupItem from "./PopupItem";

import { FaList } from "react-icons/fa";
import { MdOutlineComment, MdAttachFile } from "react-icons/md";

import { formatDate } from "@/constants";

import styles from "./Task.module.scss";

const Task = ({ task }) => {
  const {
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
    TASK_MORE_OPTIONS,
    navigate,
    user,
    openAddSubtaskModal,
    isEditModalOpen,
    closeEditModal,
    isAddSubtaskModalOpen,
    closeAddSubtaskModal,
    onAddSubtaskHandler,
    isQuestionModalOpen,
    closeQuestionModal,
    onDeleteTaskHandler,
    isStageModalOpen,
    closeStageModal,
  } = useTask({ task });

  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.headerTop}>
              <PriorityIndicator withAddition priority={task.priority} />
              <More onClick={handleToggle} />
              {isOpened && (
                <Popup
                  className={`${styles.popup}`}
                  isClosing={isClosing}
                  handleClose={handleClose}
                >
                  {TASK_MORE_OPTIONS.map((block) =>
                    block.map((item, i) => (
                      <PopupItem
                        disabled={item.permission}
                        key={item.title}
                        className={i + 1 === block.length ? styles.divider : ""}
                        icon={item.icon}
                        title={item.title}
                        handleClose={handleClose}
                        onClick={item.onClick}
                      />
                    )),
                  )}
                </Popup>
              )}
              <TaskModals
                task={task}
                isEditModalOpen={isEditModalOpen}
                closeEditModal={closeEditModal}
                isAddSubtaskModalOpen={isAddSubtaskModalOpen}
                closeAddSubtaskModal={closeAddSubtaskModal}
                onAddSubtaskHandler={onAddSubtaskHandler}
                isQuestionModalOpen={isQuestionModalOpen}
                closeQuestionModal={closeQuestionModal}
                onDeleteTaskHandler={onDeleteTaskHandler}
                isStageModalOpen={isStageModalOpen}
                closeStageModal={closeStageModal}
              />
            </div>

            <div
              onClick={() => navigate(task._id)}
              className={styles.taskTitle}
            >
              <StageCircle stage={task.stage} />
              <h1 className={styles.title}>{task.title}</h1>
            </div>
            <div className={styles.date}>{formatDate(new Date(task.date))}</div>
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.details}>
            <article title="Commentary" className={styles.commentary}>
              <MdOutlineComment />
              <span>{task.activities.length}</span>
            </article>
            <article title="Assets" className={styles.assets}>
              <MdAttachFile />
              <span>{task.assets.length}</span>
            </article>
            <article title={"Subtasks"} className={styles.subtasks}>
              <FaList />
              <span>0/{task.subTasks.length}</span>
            </article>
          </section>
          <section>
            <Team
              infoClassName={styles.userInfo}
              className={styles.team}
              team={task.team}
            />
          </section>
        </main>
        <footer className={styles.footer}>
          <section className={styles.subtasksWrapper}>
            {task.subTasks.map((subtask, i) => (
              <Subtask index={i} {...subtask} key={subtask._id} />
            ))}
          </section>
          <button
            disabled={user.isAdmin}
            onClick={user.isAdmin && openAddSubtaskModal}
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

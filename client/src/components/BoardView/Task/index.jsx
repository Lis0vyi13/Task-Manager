import { Link } from "react-router-dom";
import useTask from "./useTask";
import { useMoveTaskToTrashMutation } from "@/redux/features/tasks/TaskSlice";
import { toast } from "sonner";

import TaskModals from "@/components/TaskModals";
import Popup from "@/ui/Popup";
import Team from "@/components/Team";
import StageCircle from "@/components/StageCircle";
import PriorityIndicator from "@/components/PriorityIndicator";
import More from "@/components/More";
import PopupItem from "../../PopupItem";

import { FaList } from "react-icons/fa";
import { MdOutlineComment, MdAttachFile } from "react-icons/md";

import { formatDate } from "@/constants";

import styles from "./Task.module.scss";

const Task = ({ task, isLastTask }) => {
  const {
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
    TASK_MORE_OPTIONS,
    navigate,
    user,
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

  const doneSubtasksLength = task?.subTasks?.filter((subtask) => subtask.done).length;
  const [moveTaskToTrash, { isLoading }] = useMoveTaskToTrashMutation();
  const deleteHandler = async () => {
    try {
      await moveTaskToTrash({ id: task?._id }).unwrap();
      toast.success("Moved to trash successful!");
    } catch (error) {
      toast.success(error?.data?.message);
    }
  };
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.headerTop}>
              <PriorityIndicator style={{ marginLeft: 0 }} withAddition priority={task.priority} />
              <More onClick={handleToggle} />
              {isOpened && (
                <Popup
                  className={`${styles.popup} ${isLastTask ? styles.lastTaskPopup : ""}`}
                  isClosing={isClosing}
                  handleClose={handleClose}
                >
                  {TASK_MORE_OPTIONS.map((block, blockIndex) =>
                    block.map((item, i) => (
                      <PopupItem
                        disabled={!user?.isAdmin && item.permission}
                        key={item.title}
                        className={
                          i + 1 === block.length && blockIndex + 1 !== TASK_MORE_OPTIONS.length
                            ? "divider"
                            : ""
                        }
                        icon={item.icon}
                        title={item.title}
                        handleClose={handleClose}
                        onClick={user?.isAdmin || !item.permission ? item.onClick : undefined}
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
                isLoading={isLoading}
                closeQuestionModal={closeQuestionModal}
                onDeleteTaskHandler={onDeleteTaskHandler}
                isStageModalOpen={isStageModalOpen}
                closeStageModal={closeStageModal}
                deleteHandler={deleteHandler}
              />
            </div>

            <div onClick={() => navigate(task._id)} className={styles.taskTitle}>
              <StageCircle stage={task.stage} />
              <h1 className={styles.title}>{task.title}</h1>
            </div>
            <div className={styles.date}>{formatDate(new Date(task.date))}</div>
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.details}>
            <Link to={`/task/${task._id}`} title="Commentary" className={styles.commentary}>
              <MdOutlineComment />
              <span>{task?.activities.length || 0}</span>
            </Link>
            <Link to={`/task/${task._id}`} title="Assets" className={styles.assets}>
              <MdAttachFile />
              <span>{task?.assets.length}</span>
            </Link>
            <Link to={`/task/${task._id}`} title={"Subtasks"} className={styles.subtasks}>
              <FaList />
              <span>
                {doneSubtasksLength}/{task?.subTasks.length}
              </span>
            </Link>
          </section>
          <section>
            <Team infoClassName={styles.userInfo} className={styles.team} team={task.team} />
          </section>
        </main>
        <footer className={styles.footer}>
          {/* <section className={styles.subtasksWrapper}>
            {task?.subTasks?.length > 0
              ? task.subTasks.map((subtask, i) => (
                  <Subtask index={i} {...subtask} key={subtask._id} />
                ))
              : "Subtasks were not added"}
          </section> */}
          <button
            onClick={() => navigate(task._id, { state: { isSubtaskModalOpen: true } })}
            className={`${styles.btnAddSubtask}`}
          >
            <span>+</span> <p>Add subtask</p>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Task;

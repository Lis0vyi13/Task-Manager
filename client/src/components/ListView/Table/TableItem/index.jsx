import { Link } from "react-router-dom";
import useTaskPopup from "@/hooks/useTaskPopup";
import useBreakpoints from "@/hooks/useBreakpoints";
import { useMoveTaskToTrashMutation } from "@/redux/features/tasks/TaskSlice";
import useUser from "@/hooks/useUser";
import { toast } from "sonner";

import Team from "@/components/Team";
import StageCircle from "@/components/StageCircle";
import More from "@/components/More";
import PopupItem from "@/components/PopupItem";
import Popup from "@/ui/Popup";
import TaskModals from "@/components/TaskModals";
import PriorityIndicator from "@/components/PriorityIndicator";

import { MdAttachFile, MdOutlineComment } from "react-icons/md";
import { FaList } from "react-icons/fa";

import { formatDate } from "@/constants";
import styles from "./TableItem.module.scss";

const TableItem = ({ task, navigateToTask }) => {
  const {
    isEditModalOpen,
    closeEditModal,
    isQuestionModalOpen,
    closeQuestionModal,
    openQuestionModal,
    openEditModal,
    handleToggle,
    isOpened,
    isClosing,
    closeAddSubtaskModal,
    handleClose,
    isAddSubtaskModalOpen,
    onAddSubtaskHandler,
    closeStageModal,
    isStageModalOpen,
    onDeleteTaskHandler,
    TASK_MORE_OPTIONS,
  } = useTaskPopup({ task });
  const user = useUser();
  const { isDesktop } = useBreakpoints();
  const [moveTaskToTrash] = useMoveTaskToTrashMutation();
  const deleteHandler = async () => {
    try {
      await moveTaskToTrash({ id: task?._id }).unwrap();
      toast.success("Moved to trash successful!");
    } catch (error) {
      toast.success(error?.data?.message);
    }
  };

  return (
    <tr className={styles.tr} key={task._id}>
      <td onClick={() => navigateToTask(task._id)} className={`${styles.tableTitle} ${styles.td}`}>
        <StageCircle stage={task.stage} />
        <h1 className={styles.title}>{task.title}</h1>
      </td>
      {isDesktop ? (
        <>
          <td className={`${styles.priority} ${styles.td}`}>
            <PriorityIndicator withAddition priority={task.priority} />
          </td>
          <td className={`${styles.td} ${styles.createdAt} ${styles.capitalize}`}>
            <span className={styles.daysAgo}>{formatDate(new Date(task.date))}</span>
          </td>
          <td className={`${styles.td} ${styles.details}`}>
            <Link to={`/task/${task._id}`} title="Commentary" className={styles.commentary}>
              <MdOutlineComment />
              <span>{task.activities.length || 0}</span>
            </Link>
            <Link to={`/task/${task._id}`} title="Assets" className={styles.assets}>
              <MdAttachFile />
              <span>{task.assets.length}</span>
            </Link>
            <Link to={`/task/${task._id}`} title={"Subtasks"} className={styles.subtasks}>
              <FaList />
              <span>0/{task.subTasks.length}</span>
            </Link>
          </td>
          <td className={`${styles.td}`}>
            <Team
              infoClassName={styles.userInfo}
              side={"left"}
              className={styles.team}
              team={task?.team}
            />
          </td>
          <td className={`${styles.actions} ${styles.td} `}>
            <button
              disabled={!user?.isAdmin}
              onClick={() => openEditModal(task)}
              className={styles.editBtn}
              title={!user?.isAdmin ? "Administrator rights are needed" : null}
            >
              Edit
            </button>
            <button
              disabled={!user?.isAdmin}
              onClick={() => openQuestionModal(task)}
              className={styles.deleteBtn}
              title={!user?.isAdmin ? "Administrator rights are needed" : null}
            >
              Delete
            </button>
          </td>
        </>
      ) : (
        <td className={styles.more}>
          <More onClick={handleToggle} />
          {isOpened && (
            <Popup className={`${styles.popup}`} isClosing={isClosing} handleClose={handleClose}>
              {TASK_MORE_OPTIONS.map((block) =>
                block.map((item, i) => (
                  <PopupItem
                    disabled={!user?.isAdmin && item.permission}
                    key={item.title}
                    className={i + 1 === block.length ? "divider" : ""}
                    icon={item.icon}
                    title={item.title}
                    handleClose={handleClose}
                    onClick={user?.isAdmin || !item.permission ? item.onClick : undefined}
                  />
                )),
              )}
            </Popup>
          )}
        </td>
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
        deleteHandler={deleteHandler}
      />
    </tr>
  );
};

export default TableItem;

import { useMoveTaskToTrashMutation } from "@/redux/features/tasks/TaskSlice";
import { useNavigate } from "react-router-dom";
import useTaskDetails from "./useTaskDetails";

import { toast } from "sonner";
import TaskDetailsLeft from "./TaskDetailsLeft";
import TaskModals from "../TaskModals";
import More from "../More";
import PopupItem from "../PopupItem";
import Popup from "@/ui/Popup";
import TaskDetailsRight from "./TaskDetailsRight";

import styles from "./TaskDetails.module.scss";

const TaskDetails = ({ task }) => {
  const {
    OPTIONS,
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
    isEditModalOpen,
    closeEditModal,
    isAddSubtaskModalOpen,
    closeAddSubtaskModal,
    isQuestionModalOpen,
    closeQuestionModal,
    isStageModalOpen,
    closeStageModal,
  } = useTaskDetails({
    task,
  });

  const navigate = useNavigate();
  const [moveTaskToTrash, { isLoading }] = useMoveTaskToTrashMutation();
  const deleteHandler = async () => {
    try {
      await moveTaskToTrash({ id: task?._id }).unwrap();
      toast.success("Moved to trash successful!");
      navigate("/tasks");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <section className={styles.taskDetail}>
      <div className={styles.more}>
        <More onClick={handleToggle} />
        {isOpened && (
          <Popup className={`${styles.popup} `} isClosing={isClosing} handleClose={handleClose}>
            {OPTIONS.map((block, blockIndex) =>
              block.map((item, i) => (
                <PopupItem
                  disabled={!item.permission}
                  key={item.title}
                  className={
                    i + 1 === block.length && blockIndex + 1 !== OPTIONS.length ? "divider" : ""
                  }
                  icon={item.icon}
                  title={item.title}
                  handleClose={handleClose}
                  onClick={item.permission ? item.onClick : undefined}
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
          isQuestionModalOpen={isQuestionModalOpen}
          isLoading={isLoading}
          closeQuestionModal={closeQuestionModal}
          isStageModalOpen={isStageModalOpen}
          closeStageModal={closeStageModal}
          deleteHandler={deleteHandler}
        />
      </div>
      <article className={styles.block}>
        <TaskDetailsLeft task={task} />
      </article>
      <article className={styles.block}>
        <TaskDetailsRight task={task} />
      </article>
    </section>
  );
};

export default TaskDetails;

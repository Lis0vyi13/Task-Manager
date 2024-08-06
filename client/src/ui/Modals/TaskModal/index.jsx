import useTaskModal from "./useTaskModal";

import ModalButtons from "@/ui/ModalButtons";
import Title from "@/ui/Title";
import SelectField from "@/ui/Inputs/SelectField";
import InputField from "@/ui/Inputs/InputField";
import TextArea from "@/ui/Inputs/TextArea";
import ImageModal from "../Image";
import Modal from "../Modal";

import { FaImages } from "react-icons/fa";

import styles from "./TaskModal.module.scss";

const stages = [
  { value: "todo", label: "TODO" },
  { value: "in progress", label: "IN PROGRESS" },
  { value: "completed", label: "COMPLETED" },
];

const priority = [
  { value: "low", label: "LOW" },
  { value: "normal", label: "NORMAL" },
  { value: "medium", label: "MEDIUM" },
  { value: "high", label: "HIGH" },
];

const TaskModal = ({ onClose, className, task, changedValue }) => {
  const {
    users,
    handleSubmit,
    fileCount,
    register,
    control,
    handleFileChange,
    filePreviews,
    selectedImg,
    handleCloseImg,
    handleImageClick,
    onCloseHandler,
    onSubmit,
    isLoading,
    removeImageHandler,
  } = useTaskModal({
    task,
    onClose,
  });

  return (
    <Modal
      changedValue={changedValue}
      className={className}
      noCross
      onClose={onCloseHandler}
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className={`modalWrapper ${styles.modal}`}>
        <Title className="modalTitle">{task ? "Update task" : "Add task"}</Title>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <InputField
            name="title"
            control={control}
            label="Task title"
            rules={{ required: "Task title is required" }}
            placeholder="Title name"
          />

          <SelectField
            name="team"
            control={control}
            label="Assign task to:"
            rules={{ required: "Assign task to user is required" }}
            options={users}
            isMulti
            placeholder="Assign to..."
          />
          <div className={styles.stagePriorityBlock}>
            <div className={styles.stageBlock}>
              <SelectField
                name="stage"
                control={control}
                label="Task stage"
                rules={{ required: "Stage is required" }}
                options={stages}
                placeholder="Stage..."
              />
            </div>
            <div className={styles.priorityBlock}>
              <SelectField
                name="priority"
                control={control}
                label="Priority level"
                rules={{ required: "Priority is required" }}
                options={priority}
                placeholder="Priority..."
              />
            </div>
          </div>
          <div className={styles.dateAssetsBlock}>
            <div className={styles.dateBlock}>
              <InputField
                name="date"
                control={control}
                label="Task date"
                type="date"
                rules={{ required: "Date is required" }}
              />
            </div>
            <div className={styles.addAssetsBlock}>
              <input
                type="file"
                className={styles.inputFile}
                id="assets"
                {...register("assets")}
                multiple
                onChange={(e) => handleFileChange(e)}
              />
              <label htmlFor="assets" className={styles.addAssetsLabel}>
                <FaImages className={styles.addAssetsIcon} />
                <p className={styles.addAssetsText}>
                  Add assets
                  {fileCount > 0 && <span> ({fileCount} files selected)</span>}
                </p>
              </label>
            </div>
          </div>
          {filePreviews.length > 0 && (
            <div className={styles.preview}>
              {filePreviews.map((src, index) => (
                <div key={index} className={styles.image}>
                  <img onClick={() => handleImageClick(src)} src={src} alt={`Asset ${index + 1}`} />
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => removeImageHandler(src)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
          <TextArea
            name="description"
            control={control}
            label="Task Description"
            placeholder="Describe the task..."
          />
          <TextArea
            name="links"
            control={control}
            label="Add links (separated by commas ',')"
            placeholder="Add some links..."
          />
          <ModalButtons
            submitButtonText={task ? "Save" : "Create"}
            disabled={isLoading}
            onClose={onCloseHandler}
          />
        </form>
      </section>
      {selectedImg && (
        <ImageModal
          changedValue={selectedImg}
          onClose={handleCloseImg}
          src={selectedImg}
          alt={selectedImg}
        />
      )}
    </Modal>
  );
};

export default TaskModal;

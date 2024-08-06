import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useModalHandlers from "@/hooks/useModalHandlers";
import transformToInputDateType from "@/utils/transformToInputDateType";
import { useAddSubtaskMutation, useUpdateSubtaskMutation } from "@/redux/features/tasks/TaskSlice";
import { getCurrentDate } from "@/utils/getCurrentDate";

import LoaderOnLoading from "@/components/LoaderOnLoading";
import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import ModalButtons from "@/ui/ModalButtons";
import Modal from "../Modal";

import styles from "./SubtaskModal.module.scss";

const SubtaskModal = ({ changedValue, onClose, subtask, _id }) => {
  const defaultValues = {
    title: subtask?.title || "",
    date: subtask?.date ? transformToInputDateType(subtask?.date) : getCurrentDate(),
    tag: subtask?.tag || "",
  };
  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    defaultValues,
  });
  const [addSubtask, { isLoading: loadingOnAdd }] = useAddSubtaskMutation();
  const [updateSubtask, { isLoading: loadingOnUpdate }] = useUpdateSubtaskMutation();

  const { onSubmitHandler, onCloseHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const onSubmit = useCallback(
    async (data) => {
      try {
        const submitData = { ...data, _id };
        if (subtask) {
          submitData.subTaskId = subtask?.subtaskId;
          await updateSubtask(submitData, _id).unwrap();
        } else {
          await addSubtask(submitData, _id).unwrap();
        }
        onSubmitHandler(submitData);
        toast.success(subtask ? "Changed successful" : "Added successful");
      } catch (error) {
        toast.error(error.data.message);
      }
    },
    [_id, addSubtask, onSubmitHandler, subtask, updateSubtask],
  );

  return (
    <Modal
      changedValue={changedValue}
      noCross
      onSubmit={handleSubmit(onSubmit)}
      onClose={onCloseHandler}
    >
      <LoaderOnLoading isLoading={loadingOnAdd || loadingOnUpdate} />

      <section className={`modalWrapper ${styles.modal}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title className={"modalTitle"}>{subtask ? "Edit subtask" : "Add subtask"}</Title>
          <InputField
            name={"title"}
            control={control}
            label={"Title"}
            rules={{
              required: "Title is required",
            }}
            placeholder={"Subtask title"}
          />
          <div className={styles.dateTagBlock}>
            <InputField
              name="date"
              control={control}
              label="Task date"
              type="date"
              placeholder={"Date..."}
              rules={{ required: "Date is required" }}
            />
            <InputField name="tag" placeholder={"Tag"} control={control} label="Tag" />
          </div>
          <ModalButtons
            disabled={loadingOnAdd || loadingOnUpdate}
            submitButtonText={subtask ? "Save" : "Add subtask"}
            onClose={onCloseHandler}
          />
        </form>
      </section>
    </Modal>
  );
};

export default SubtaskModal;

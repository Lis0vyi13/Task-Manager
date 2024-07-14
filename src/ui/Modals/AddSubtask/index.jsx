import { useCallback } from "react";
import { useForm } from "react-hook-form";
import useModalHandlers from "@/hooks/useModalHandlers";

import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import ModalButtons from "@/ui/ModalButtons";
import Modal from "../Modal";

import styles from "./AddSubtask.module.scss";

const AddSubtask = ({ changedValue, onClose }) => {
  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
  });

  const { onSubmitHandler, onCloseHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const onSubmit = useCallback(() => {}, []);

  return (
    <Modal
      changedValue={changedValue}
      noCross
      onSubmit={onSubmit}
      onClose={onCloseHandler}
    >
      <section className="modalWrapper">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Title className={"modalTitle"}>Add subtask</Title>
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
              rules={{ required: "Date is required" }}
            />
            <InputField
              name="tag"
              placeholder={"Tag"}
              control={control}
              label="Tag"
            />
          </div>
          <ModalButtons
            onSubmit={onSubmit}
            submitButtonText="Add Task"
            onClose={onCloseHandler}
          />
        </form>
      </section>
    </Modal>
  );
};

export default AddSubtask;

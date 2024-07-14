import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import useModalHandlers from "@/hooks/useModalHandlers";

import Title from "@/ui/Title";
import SelectField from "@/ui/Inputs/SelectField";
import ModalButtons from "@/ui/ModalButtons";
import Modal from "../Modal";

// import styles from "./StageModal.module.scss";

const stages = [
  { value: "todo", label: "TODO" },
  { value: "in progress", label: "IN PROGRESS" },
  { value: "completed", label: "COMPLETED" },
];

const StageModal = ({ changedValue, onClose, task }) => {
  const defaultValues = useMemo(
    () => ({
      stage: task?.stage
        ? {
            value: task.stage,
            label: task.stage.toUpperCase(),
          }
        : "",
    }),
    [task?.stage],
  );

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    defaultValues,
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
          <Title className={"modalTitle"}>Change task stage</Title>
          <SelectField
            name="stage"
            control={control}
            label={"Stage"}
            rules={{ required: "Stage is required" }}
            placeholder={"Stage..."}
            options={stages}
          />
          <ModalButtons
            onSubmit={onSubmit}
            submitButtonText="Submit"
            onClose={onCloseHandler}
          />
        </form>
      </section>
    </Modal>
  );
};

export default StageModal;

import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useModalHandlers from "@/hooks/useModalHandlers";
import { useUpdateStageMutation } from "@/redux/features/tasks/TaskSlice";

import LoaderOnLoading from "@/components/LoaderOnLoading";
import Title from "@/ui/Title";
import SelectField from "@/ui/Inputs/SelectField";
import ModalButtons from "@/ui/ModalButtons";
import Modal from "../Modal";

import styles from "./StageModal.module.scss";

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
            value: task?.stage,
            label: task?.stage.toUpperCase(),
          }
        : "",
    }),
    [task?.stage],
  );
  const [updateStage, { isLoading }] = useUpdateStageMutation();

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const { onSubmitHandler, onCloseHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const onSubmit = useCallback(
    async (data) => {
      const stageData = { stage: data.stage.value };

      try {
        await updateStage({ data: stageData, id: task?._id }).unwrap();
        onSubmitHandler(data);
        toast.success("Changed successful");
      } catch (error) {
        toast.error(error?.data?.message);
      }
    },
    [onSubmitHandler, task?._id, updateStage],
  );

  return (
    <Modal
      changedValue={changedValue}
      noCross
      onSubmit={handleSubmit(onSubmit)}
      onClose={onCloseHandler}
    >
      <LoaderOnLoading isLoading={isLoading} />

      <section className={`modalWrapper ${styles.modal}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Title className={"modalTitle"}>Change task stage</Title>
          <SelectField
            name="stage"
            control={control}
            label={"Stage"}
            rules={{ required: "Stage is required" }}
            placeholder={"Stage..."}
            options={stages}
          />
          <ModalButtons disabled={isLoading} submitButtonText="Submit" onClose={onCloseHandler} />
        </form>
      </section>
    </Modal>
  );
};

export default StageModal;

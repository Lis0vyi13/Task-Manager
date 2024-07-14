import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import transformToInputDateType from "@/utils/transformToInputDateType";

const useTaskModal = ({ summary, task }) => {
  const defaultValues = useMemo(
    () => ({
      name: task?.title || "",
      assignee:
        task?.team?.map((member) => ({
          value: member._id,
          label: member.name,
        })) || "",
      stage: task?.stage
        ? {
            value: task.stage,
            label: task.stage.toUpperCase(),
          }
        : "",
      priority: task?.priority
        ? {
            value: task.priority,
            label: task.priority.toUpperCase(),
          }
        : "",
      date: task?.date ? transformToInputDateType(task.date) : "",
      assets: task?.assets || [],
      description: task?.description || "",
      links: task?.links ? task.links.join(",") : "",
    }),
    [task],
  );
  const { handleSubmit, register, reset, control, setValue } = useForm({
    mode: "onChange",
    defaultValues,
  });
  const [fileCount, setFileCount] = useState(0);

  const users = useMemo(
    () =>
      summary.users.map((user) => ({
        value: user._id,
        label: user.name,
      })),
    [summary.users],
  );

  const handleFileChange = useCallback((e) => {
    console.log(e.target.files);
    setFileCount(e.target.files.length);
  }, []);

  const onSubmit = useCallback(() => {}, []);

  return {
    users,
    handleSubmit,
    fileCount,
    register,
    control,
    handleFileChange,
    setValue,
    onSubmit,
    reset,
  };
};

export default useTaskModal;

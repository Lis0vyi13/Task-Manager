import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useCreateTaskMutation, useUpdateTaskMutation } from "@/redux/features/tasks/TaskSlice";
import useModalHandlers from "@/hooks/useModalHandlers";
import { uploadFile } from "@/utils/uploadFile";
import transformToInputDateType from "@/utils/transformToInputDateType";
import { getCurrentDate } from "@/utils/getCurrentDate";

const useTaskModal = ({ task, onClose }) => {
  const defaultValues = useMemo(
    () => ({
      title: task?.title || "",
      team:
        task?.team?.map((member) => ({
          value: member._id,
          label: member.name + " " + member.surname,
        })) || [],
      stage: task?.stage
        ? {
            value: task?.stage,
            label: task?.stage.toUpperCase(),
          }
        : "",
      priority: task?.priority
        ? {
            value: task?.priority,
            label: task?.priority.toUpperCase(),
          }
        : "",
      date: task?.date ? transformToInputDateType(task?.date) : getCurrentDate(),
      assets: task?.assets || [],
      description: task?.description || "",
      links: task?.links ? task?.links?.join(",") : "",
    }),
    [task],
  );
  const { handleSubmit, register, reset, control, setValue, getValues } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const [fileCount, setFileCount] = useState(task?.assets.length || 0);
  const [filePreviews, setFilePreviews] = useState(task?.assets || []);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedDeleteImg, setSelectedDeleteImg] = useState();
  const users = useSelector((store) => store.user.users);
  const [isLoading, setIsLoading] = useState(false);

  const [createTask] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const { onCloseHandler, onSubmitHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const handleCloseImg = useCallback(() => setSelectedImg(null), []);
  const handleImageClick = useCallback((src) => {
    setSelectedImg(src);
  }, []);

  const modifiedUsers = useMemo(
    () =>
      users.map((user) => ({
        value: user._id,
        label: `${user.name} ${user.surname}`,
      })),
    [users],
  );

  const deleteImgHandler = useCallback((image) => {
    setSelectedDeleteImg(image);
  }, []);

  const removeImageHandler = useCallback(
    (image) => {
      setFilePreviews((prevFiles) => {
        const updatedFiles = prevFiles.filter((file) => file !== image);
        setFileCount(updatedFiles.length);
        setValue("assets", updatedFiles);
        return updatedFiles;
      });
    },
    [setValue],
  );

  const onDeleteAsset = useCallback(() => {
    removeImageHandler(selectedDeleteImg);
  }, [removeImageHandler, selectedDeleteImg]);

  const handleFileChange = useCallback(
    async (e) => {
      const files = Array.from(e.target.files);
      const existingFiles = getValues("assets") || [];
      const newFiles = files.filter((file) => file instanceof File);
      const existingUrls = existingFiles.filter((item) => typeof item === "string");

      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setFileCount((prevCount) => prevCount + newFiles.length);
      setFilePreviews((prevFiles) => [...prevFiles, ...newPreviews]);

      const allAssets = [...existingUrls, ...newFiles];
      setValue("assets", allAssets);
    },
    [getValues, setValue],
  );

  const onSubmit = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        document.body.style.pointerEvents = "none";

        const teamIds = data.team.map((member) => member.value);
        const files = data.assets.filter((item) => item instanceof File);
        const uploadedFileURLs = await Promise.all(files.map((file) => uploadFile(file)));
        const assetURLs = [
          ...data.assets.filter((item) => typeof item === "string"),
          ...uploadedFileURLs,
        ];
        const taskData = {
          ...data,
          assets: assetURLs,
          team: teamIds,
          links: data.links ? data.links?.split(",") : [],
        };
        if (task) {
          await updateTask({ data: taskData, id: task?._id }).unwrap();
        } else {
          await createTask(taskData).unwrap();
        }

        onSubmitHandler();
        setIsLoading(false);
        toast.success(task ? "Task updated successfully!" : "New task created!");
      } catch (error) {
        console.log(error);
        toast.error(error.message || "An error occurred");
      } finally {
        document.body.style.pointerEvents = "all";
      }
    },
    [createTask, onSubmitHandler, task, updateTask],
  );

  return {
    users: modifiedUsers,
    handleSubmit,
    fileCount,
    register,
    control,
    handleFileChange,
    setValue,
    reset,
    filePreviews,
    selectedImg,
    handleCloseImg,
    handleImageClick,
    removeImageHandler,
    onDeleteAsset,
    uploadFile,
    onSubmit,
    isLoading,
    deleteImgHandler,
    onCloseHandler,
  };
};

export default useTaskModal;

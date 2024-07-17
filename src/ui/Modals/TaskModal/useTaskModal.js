import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import transformToInputDateType from "@/utils/transformToInputDateType";
import useModal from "@/hooks/useModal";

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

  const [fileCount, setFileCount] = useState(task?.assets.length || 0);
  const [filePreviews, setFilePreviews] = useState(task?.assets || []);
  const [selectedImg, setSelectedImg] = useState("");

  const handleCloseImg = useCallback(() => setSelectedImg(null), []);
  const handleImageClick = useCallback((src) => {
    setSelectedImg(src);
  }, []);

  const users = useMemo(
    () =>
      summary.users.map((user) => ({
        value: user._id,
        label: user.name,
      })),
    [summary.users],
  );

  const [isDeleteModalOpen, openDeleteModalHandler, closeDeleteModal] =
    useModal();

  const [selectedDeleteImg, setSelectedDeleteImg] = useState();

  const openDeleteModal = useCallback(
    (image) => {
      openDeleteModalHandler();
      setSelectedDeleteImg(image);
    },
    [openDeleteModalHandler],
  );

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
    closeDeleteModal();
  }, [closeDeleteModal, removeImageHandler, selectedDeleteImg]);

  const handleFileChange = useCallback(
    (e) => {
      const files = Array.from(e.target.files);
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setFileCount((prevCount) => prevCount + files.length);
      setFilePreviews((prevFiles) => [...prevFiles, ...newPreviews]);
      setValue("assets", [...filePreviews, ...files]);
    },
    [setValue, filePreviews],
  );

  return {
    users,
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
    isDeleteModalOpen,
    openDeleteModal,
    onDeleteAsset,
    closeDeleteModal,
  };
};

export default useTaskModal;

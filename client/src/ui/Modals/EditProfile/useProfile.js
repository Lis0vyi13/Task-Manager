import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateProfileMutation } from "@/redux/features/user/UserSlice";
import useModalHandlers from "@/hooks/useModalHandlers";
import useUser from "@/hooks/useUser";
import useActions from "@/hooks/useActions";
import { setCookie } from "@/utils/setCookie";
import { uploadFile } from "@/utils/uploadFile";

const useProfile = ({ onClose, changedValue }) => {
  const user = useUser();
  const [avatarPhoto, setAvatarPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfile] = useUpdateProfileMutation();
  const { setUser } = useActions();

  const defaultValues = {
    name: user?.name || "",
    surname: user?.surname || "",
    email: user?.email || "",
    title: user?.title || "",
    role: user?.role || "",
    avatarColor: user?.avatarColor || "#000000",
    avatar: user?.avatar || "",
  };

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const { onSubmitHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const onSubmit = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        document.body.style.pointerEvents = "none";

        const profileData = { ...data, _id: user?._id };

        if (avatarPhoto) {
          const uploadedFileURL = await uploadFile(avatarPhoto);
          profileData.avatar = uploadedFileURL;
        }

        const updatedUser = await updateProfile(profileData).unwrap();
        setCookie("__u", JSON.stringify(updatedUser?.user));
        setUser(updatedUser?.user);
        onSubmitHandler(data);
        setIsLoading(false);
        toast.success("Changed successful");
      } catch (error) {
        toast.error(error.data.message);
      } finally {
        document.body.style.pointerEvents = "all";
      }
    },
    [user?._id, avatarPhoto, updateProfile, setUser, onSubmitHandler],
  );

  const handleFileChange = useCallback((e) => {
    setAvatarPhoto(e.target.files[0]);
  }, []);

  return {
    handleSubmit,
    onSubmit,
    handleFileChange,
    avatarPhoto,
    isLoading,
    onClose,
    changedValue,
    control,
    uploadFile,
  };
};

export default useProfile;

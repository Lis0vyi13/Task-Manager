import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import transformToInputDateType from "@/utils/transformToInputDateType";

const useEditUser = ({ user, selectOptions }) => {
  const defaultValues = useMemo(
    () => ({
      name: user?.name || "",
      role: user?.role || "",
      email: user?.email || "",
      status:
        user?.isActive !== ""
          ? selectOptions?.find((option) => option.value === user.isActive)
          : "",
      createdAt: user?.createdAt
        ? transformToInputDateType(user.createdAt)
        : "",
    }),
    [
      selectOptions,
      user.createdAt,
      user?.email,
      user.isActive,
      user?.name,
      user?.role,
    ],
  );

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = useCallback(() => {}, []);

  return { handleSubmit, reset, onSubmit, control };
};

export default useEditUser;

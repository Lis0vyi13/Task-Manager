import { useMemo } from "react";
import { useForm } from "react-hook-form";
import transformToInputDateType from "@/utils/transformToInputDateType";

const selectStatusOptions = [
  { value: true, label: "Active" },
  { value: false, label: "Disabled" },
];

const useEditUser = ({ user }) => {
  const defaultValues = useMemo(
    () => ({
      name: user?.name || "",
      role: user?.role || "",
      email: user?.email || "",
      status:
        user?.isActive !== ""
          ? selectStatusOptions?.find(
              (option) => option.value === user.isActive,
            )
          : "",
      createdAt: user?.createdAt
        ? transformToInputDateType(user.createdAt)
        : "",
    }),
    [user.createdAt, user?.email, user.isActive, user?.name, user?.role],
  );

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    defaultValues,
  });

  return { handleSubmit, reset, control, selectStatusOptions };
};

export default useEditUser;

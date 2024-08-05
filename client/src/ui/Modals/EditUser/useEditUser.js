import { useMemo } from "react";
import { useForm } from "react-hook-form";

const selectStatusOptions = [
  { value: true, label: "Active" },
  { value: false, label: "Disabled" },
];

const isAdminOptions = [
  { value: true, label: "True" },
  { value: false, label: "False" },
];

const useEditUser = ({ user }) => {
  const defaultValues = useMemo(
    () => ({
      name: user?.name || "",
      surname: user?.surname || "",
      role: user?.role || "",
      email: user?.email || "",
      isActive:
        user?.isActive !== ""
          ? selectStatusOptions?.find((option) => option.value === user.isActive)
          : "",
      isAdmin:
        user?.isAdmin !== "" ? isAdminOptions?.find((option) => option.value === user.isAdmin) : "",
    }),
    [user?.email, user.isActive, user.isAdmin, user?.name, user?.role, user?.surname],
  );

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    defaultValues,
  });

  return { handleSubmit, reset, control, selectStatusOptions, isAdminOptions };
};

export default useEditUser;

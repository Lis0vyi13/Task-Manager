import { memo, useCallback } from "react";
import useEditUser from "./useEditUser";
import useModalHandlers from "@/hooks/useModalHandlers";
import { useUpdateProfileMutation } from "@/redux/features/user/UserSlice";
import { toast } from "sonner";

import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import SelectField from "@/ui/Inputs/SelectField";
import ModalButtons from "@/ui/ModalButtons";
import Modal from "../Modal";

import styles from "./EditUser.module.scss";

const EditUser = memo(({ user, onClose, changedValue }) => {
  const { handleSubmit, reset, control, selectStatusOptions, isAdminOptions } = useEditUser({
    user,
  });
  const { onSubmitHandler } = useModalHandlers({
    onClose,
    reset,
  });
  const [updateUser] = useUpdateProfileMutation();

  const onSubmit = useCallback(
    async (data) => {
      const userData = { ...data, _id: user?._id };
      try {
        await updateUser(userData).unwrap();
        onSubmitHandler(userData);
        toast.success("Changed successful");
      } catch (error) {
        toast.error(error?.data?.message);
      }
    },
    [onSubmitHandler, updateUser, user?._id],
  );
  return (
    <Modal onSubmit={handleSubmit(onSubmit)} onClose={onClose} changedValue={changedValue} noCross>
      <section className={`modalWrapper ${styles.modal}`}>
        <Title className={"modalTitle"}>Edit user</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            name={"name"}
            control={control}
            label={"Name"}
            rules={{ required: "Name is required!" }}
            placeholder={"Your name"}
          />
          <InputField
            name={"surname"}
            control={control}
            label={"Surname"}
            rules={{ required: "Surname is required!" }}
            placeholder={"Your surname"}
          />
          <InputField
            name={"role"}
            control={control}
            label={"Role"}
            rules={{ required: "Role is required!" }}
            placeholder={"User role"}
          />
          <InputField
            name={"email"}
            control={control}
            label={"Email"}
            rules={{
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            }}
            placeholder={"example@gmail.com"}
            type="email"
            autoComplete={"email"}
          />
          <SelectField
            name="isActive"
            control={control}
            label={"Status"}
            rules={{ required: "User status is required" }}
            placeholder={"Status..."}
            options={selectStatusOptions}
          />
          <SelectField
            name="isAdmin"
            control={control}
            label={"Admin"}
            rules={{ required: "Is admin is required" }}
            options={isAdminOptions}
          />

          <ModalButtons submitButtonText="Save" onClose={onClose} />
        </form>
      </section>
    </Modal>
  );
});

export default EditUser;

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useModalHandlers from "@/hooks/useModalHandlers";
import { useChangePasswordMutation } from "@/redux/features/user/UserSlice";

import Modal from "../Modal";
import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import ModalButtons from "@/ui/ModalButtons";

import styles from "./ChangePassword.module.scss";

const ChangePassword = ({ onClose, changedValue }) => {
  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
  });
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const { onSubmitHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const onSubmit = useCallback(
    async (data) => {
      try {
        await changePassword(data).unwrap();
        onSubmitHandler(data);
        toast.success("Changed successfully");
      } catch (error) {
        toast.error(error.data.message);
      }
    },
    [changePassword, onSubmitHandler],
  );

  const validatePasswords = (data) => {
    const { newPassword, confirmedNewPassword } = data;
    if (newPassword !== confirmedNewPassword) {
      toast.error("Passwords do not match");
    } else {
      onSubmit(data);
    }
  };

  return (
    <Modal
      onSubmit={handleSubmit(validatePasswords)}
      onClose={onClose}
      changedValue={changedValue}
      noCross
    >
      <section className={`modalWrapper ${styles.modal}`}>
        <Title className={"modalTitle"}>Edit user</Title>
        <form onSubmit={handleSubmit(validatePasswords)}>
          <input type="text" name="username" style={{ display: "none" }} autoComplete="username" />
          <InputField
            name={"oldPassword"}
            control={control}
            label={"Current password"}
            rules={{
              required: "Field is required!",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters long",
              },
            }}
            placeholder={"Current password..."}
            type="password"
            autoComplete="current-password"
          />
          <InputField
            name={"newPassword"}
            control={control}
            label={"New password"}
            rules={{
              required: "Field is required!",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters long",
              },
            }}
            placeholder={"New password..."}
            type="password"
            autoComplete="new-password"
          />
          <InputField
            name={"confirmedNewPassword"}
            control={control}
            label={"Confirm new password"}
            rules={{
              required: "Field is required!",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters long",
              },
            }}
            placeholder={"Confirm new password..."}
            type="password"
            autoComplete="new-password"
          />
          <ModalButtons disabled={isLoading} submitButtonText="Save" onClose={onClose} />
        </form>
      </section>
    </Modal>
  );
};

export default ChangePassword;

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useModalHandlers from "@/hooks/useModalHandlers";

import Modal from "../Modal";
import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import ModalButtons from "@/ui/ModalButtons";

import styles from "./ChangePassword.module.scss";

const ChangePassword = ({ onClose, changedValue }) => {
  const { handleSubmit, reset, control, setError, clearErrors } = useForm({
    mode: "onChange",
  });
  const { onSubmitHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const onSubmit = useCallback(
    (data) => {
      onSubmitHandler(data);
      toast.success("Changed successful");
    },
    [onSubmitHandler],
  );

  const validatePasswords = (data) => {
    const { newPassword, confirmNewPassword } = data;
    if (newPassword !== confirmNewPassword) {
      setError("confirmNewPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
    } else {
      clearErrors("confirmNewPassword");
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
          <InputField
            name={"oldPassword"}
            control={control}
            label={"Current password"}
            rules={{ required: "Field is required!" }}
            placeholder={"Current password..."}
            type="password"
            autoComplete="on"
          />
          <InputField
            name={"newPassword"}
            control={control}
            label={"New password"}
            rules={{ required: "Field is required!" }}
            placeholder={"New password..."}
            type="password"
            autoComplete="on"
          />
          <InputField
            name={"confirmNewPassword"}
            control={control}
            label={"Confirm new password"}
            rules={{ required: "Field is required!" }}
            placeholder={"Confirm new password..."}
            type="password"
            autoComplete="on"
          />
          <ModalButtons onClose={onClose} />
        </form>
      </section>
    </Modal>
  );
};

export default ChangePassword;

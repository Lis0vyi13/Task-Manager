import { memo, useCallback } from "react";
import useEditUser from "./useEditUser";
import useModalHandlers from "@/hooks/useModalHandlers";
import { toast } from "sonner";

import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import SelectField from "@/ui/Inputs/SelectField";
import ModalButtons from "@/ui/ModalButtons";
import Modal from "../Modal";

import styles from "./EditUser.module.scss";

const EditUser = memo(({ user, onClose, changedValue }) => {
  const { handleSubmit, reset, control, selectStatusOptions } = useEditUser({
    user,
  });
  const { onSubmitHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const onSubmit = useCallback(
    (data) => {
      onSubmitHandler(data);
      toast.success("Changed successfull");
    },
    [onSubmitHandler],
  );
  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
      changedValue={changedValue}
      noCross
    >
      <section className={`modalWrapper ${styles.modal}`}>
        <Title className={"modalTitle"}>Edit user</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            disabled
            name={"name"}
            control={control}
            label={"Full name"}
            rules={{ required: "Full name is required!" }}
            placeholder={"Your full name"}
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
            name="status"
            control={control}
            label={"Status"}
            rules={{ required: "User status" }}
            placeholder={"Status..."}
            options={selectStatusOptions}
          />
          <InputField
            disabled
            name="createdAt"
            control={control}
            label="Created at"
            type="date"
            rules={{ required: "Date is required" }}
          />
          <ModalButtons onClose={onClose} />
        </form>
      </section>
    </Modal>
  );
});

export default EditUser;

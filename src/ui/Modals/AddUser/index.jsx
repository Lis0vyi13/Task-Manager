import { useCallback } from "react";
import { useForm } from "react-hook-form";
import useModalHandlers from "@/hooks/useModalHandlers";

import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import ModalButtons from "@/ui/ModalButtons";
import Modal from "../Modal";

// import styles from "./AddUser.module.scss";

const AddUser = ({ changedValue, className, onClose }) => {
  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
  });

  const { onSubmitHandler, onCloseHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const onSubmit = useCallback(() => {}, []);

  return (
    <Modal
      changedValue={changedValue}
      className={className}
      noCross
      onSubmit={onSubmit}
      onClose={onCloseHandler}
    >
      <section className="modalWrapper">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Title className={"modalTitle"}>Add new user</Title>
          <InputField
            name={"email"}
            control={control}
            label={"Email"}
            autoComplete="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            }}
            placeholder={"example@gmail.com"}
            type="email"
          />
          <ModalButtons onSubmit={onSubmit} onClose={onCloseHandler} />
        </form>
      </section>
    </Modal>
  );
};

export default AddUser;

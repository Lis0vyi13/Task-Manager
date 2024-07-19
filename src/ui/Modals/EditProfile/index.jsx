import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useModalHandlers from "@/hooks/useModalHandlers";
import useUser from "@/hooks/useUser";

import Modal from "../Modal";
import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import ModalButtons from "@/ui/ModalButtons";

import styles from "./EditProfile.module.scss";
import FileInput from "@/ui/Inputs/FileInput";

const EditProfile = ({ onClose, changedValue }) => {
  const user = useUser();
  const [avatarPhoto, setAvatarPhoto] = useState(null);

  const defaultValues = {
    name: user?.name.split(" ")[0] || "",
    surname: user?.name.split(" ")[1] || "",
    email: user?.email || "",
    avatarColor: user?.avatarColor || "#000000",
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
    (data) => {
      onSubmitHandler(data);
      console.log(data);
      toast.success("Changed successfull");
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("avatarColor", data.avatarColor);
      if (avatarPhoto) {
        formData.append("avatarPhoto", avatarPhoto);
      }
    },
    [avatarPhoto, onSubmitHandler],
  );

  const handleFileChange = useCallback((e) => {
    setAvatarPhoto(e.target.files[0]);
  }, []);

  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
      changedValue={changedValue}
      noCross
    >
      <section className={`modalWrapper ${styles.modal}`}>
        <Title className="modalTitle">Edit user</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            name="name"
            control={control}
            label="Name"
            rules={{ required: "Name is required!" }}
            placeholder="Your name"
          />
          <InputField
            name="surname"
            control={control}
            label="Surname"
            rules={{ required: "Surname is required!" }}
            placeholder="Your surname"
          />
          <InputField
            name="email"
            control={control}
            label="Email"
            rules={{
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            }}
            placeholder="example@gmail.com"
            type="email"
            autoComplete="email"
          />
          <InputField
            name="avatarColor"
            control={control}
            label="Avatar Color"
            type="color"
          />
          <div className="inputBlock">
            <FileInput name={"avatarPhoto"} onChange={handleFileChange} />
          </div>
          <ModalButtons onClose={onClose} />
        </form>
      </section>
    </Modal>
  );
};

export default EditProfile;

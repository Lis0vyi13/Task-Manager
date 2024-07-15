import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import useModalHandlers from "@/hooks/useModalHandlers";
import useUser from "@/hooks/useUser";

import Modal from "../Modal";
import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import ModalButtons from "@/ui/ModalButtons";

const EditProfile = ({ onClose, changedValue }) => {
  const user = useUser();
  const [avatarColor, setAvatarColor] = useState(
    user?.avatarColor || "#000000",
  );
  const [avatarPhoto, setAvatarPhoto] = useState(null);

  const defaultValues = {
    name: user?.name.split(" ")[0] || "",
    surname: user?.name.split(" ")[1] || "",
    email: user?.email || "",
  };

  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = useCallback(
    (data) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("avatarColor", avatarColor);
      if (avatarPhoto) {
        formData.append("avatarPhoto", avatarPhoto);
      }
      // handle form submission
    },
    [avatarColor, avatarPhoto],
  );

  const { onSubmitHandler } = useModalHandlers({
    onClose,
    reset,
  });

  const handleFileChange = (e) => {
    setAvatarPhoto(e.target.files[0]);
  };

  return (
    <Modal
      onSubmit={onSubmit}
      onClose={onClose}
      changedValue={changedValue}
      noCross
    >
      <section className="modalWrapper">
        <Title className={"modalTitle"}>Edit user</Title>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
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
          <div className="inputGroup">
            <label htmlFor="avatarColor">Avatar Color</label>
            <input
              type="color"
              id="avatarColor"
              name="avatarColor"
              value={avatarColor}
              onChange={(e) => setAvatarColor(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="avatarPhoto">Upload Avatar Photo</label>
            <input
              type="file"
              id="avatarPhoto"
              name="avatarPhoto"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <ModalButtons onSubmit={onSubmit} onClose={onClose} />
        </form>
      </section>
    </Modal>
  );
};

export default EditProfile;

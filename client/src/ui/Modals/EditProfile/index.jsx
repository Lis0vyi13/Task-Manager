import { memo } from "react";
import { createPortal } from "react-dom";
import useProfile from "./useProfile";

import Modal from "../Modal";
import Title from "@/ui/Title";
import InputField from "@/ui/Inputs/InputField";
import ModalButtons from "@/ui/ModalButtons";
import FileInput from "@/ui/Inputs/FileInput";
import ColorPicker from "@/ui/Inputs/ColorPicker";
import Loader from "@/ui/Loader";

import styles from "./EditProfile.module.scss";

const EditProfile = memo(({ onClose, changedValue }) => {
  const { handleSubmit, onSubmit, handleFileChange, avatarPhoto, isLoading, control } = useProfile({
    onClose,
    changedValue,
  });

  return (
    <Modal onSubmit={handleSubmit(onSubmit)} onClose={onClose} changedValue={changedValue} noCross>
      {isLoading &&
        createPortal(
          <div className={styles.loader}>
            <Loader />
          </div>,
          document.body,
        )}
      <section className={`modalWrapper ${styles.modal}`}>
        <header className={styles.header}>
          <Title className="modalTitle">Edit user</Title>
        </header>

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
            name="title"
            control={control}
            label="Title"
            rules={{ required: "Title is required!" }}
            placeholder="Your title"
          />
          <InputField
            name="role"
            control={control}
            label="Role"
            rules={{ required: "Role is required!" }}
            placeholder="Your role"
          />
          <ColorPicker name="avatarColor" control={control} label="Avatar Color" />
          <div className={`${styles.fileInput} inputBlock`}>
            <FileInput name="avatar" control={control} onChange={handleFileChange} />
            {avatarPhoto && <span>1 file selected</span>}
          </div>
          <ModalButtons disabled={isLoading} submitButtonText="Save" onClose={onClose} />
        </form>
      </section>
    </Modal>
  );
});

export default EditProfile;

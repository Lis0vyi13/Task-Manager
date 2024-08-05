import { useController } from "react-hook-form";
import styles from "./FileInput.module.scss";

const FileInput = ({ onChange, control, name, fileName }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={styles.fileInputWrapper}>
      <input
        type="file"
        id={name}
        name={name}
        className={styles.fileInput}
        onChange={(e) => {
          if (onChange) onChange(e);

          field.onChange(e);
        }}
        accept="image/*"
        ref={field.ref}
      />
      <label htmlFor={name} className={styles.fileInputLabel}>
        {fileName || "Upload Avatar Photo"}
      </label>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
};

export default FileInput;

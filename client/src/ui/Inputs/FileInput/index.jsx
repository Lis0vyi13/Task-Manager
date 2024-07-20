import styles from "./FileInput.module.scss";

const FileInput = ({ onChange, name, fileName }) => {
  return (
    <div className={styles.fileInputWrapper}>
      <input
        type="file"
        id={name}
        name={name}
        className={styles.fileInput}
        onChange={onChange}
        accept="image/*"
      />
      <label htmlFor={name} className={styles.fileInputLabel}>
        {fileName || "Upload Avatar Photo"}
      </label>
    </div>
  );
};

export default FileInput;

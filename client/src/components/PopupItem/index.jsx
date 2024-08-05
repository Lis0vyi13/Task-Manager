import styles from "./PopupItem.module.scss";

const PopupItem = ({ icon, title, className, disabled, onClick, handleClose }) => {
  const { Icon, color } = icon;
  const onClickHandler = () => {
    handleClose();
    onClick();
  };
  return (
    <button
      onClick={!disabled ? onClickHandler : undefined}
      disabled={disabled}
      className={`${styles.item} ${className}`}
    >
      <Icon style={{ color: color }} className={styles.icon} />
      <p className={styles.title}>{title}</p>
    </button>
  );
};

export default PopupItem;

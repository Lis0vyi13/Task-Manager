import styles from "./Button.module.scss";

const Button = ({ tabIndex, disabled, style, type, className, title, onClick, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={style}
      type={type}
      title={title}
      tabIndex={tabIndex}
      className={`${styles.button} ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;

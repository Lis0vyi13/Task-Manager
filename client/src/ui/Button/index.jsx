import styles from "./Button.module.scss";

const Button = ({ tabIndex, style, type, className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      type={type}
      tabIndex={tabIndex}
      className={`${styles.button} ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;

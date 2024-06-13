import styles from "./Button.module.scss";

const Button = ({ tabIndex, type, className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      tabIndex={tabIndex}
      className={`${styles.button} ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;

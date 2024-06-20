import Button from "@/ui/Button/Button";

import styles from "./Tab.module.scss";

const Tab = ({ title, icon, onClick, isActive }) => {
  return (
    <Button
      style={{
        color: isActive ? "#1D4ED8" : "#1F2937",
      }}
      onClick={onClick}
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
    >
      {icon}
      {title}
    </Button>
  );
};

export default Tab;

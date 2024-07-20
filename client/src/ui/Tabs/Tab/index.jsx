import Button from "@/ui/Button";

import styles from "./Tab.module.scss";

const Tab = ({ title, icon, onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
    >
      {icon}
      {title}
    </Button>
  );
};

export default Tab;

import { useSelector } from "react-redux";

import { PRIORITY_STYLES, TASK_PRIORITY_ICONS } from "@/constants";
import styles from "./PriorityIndicator.module.scss";

const PriorityIndicator = ({ priority, withAddition, style }) => {
  const { theme } = useSelector((state) => state.page);
  let color = PRIORITY_STYLES[priority];

  if (priority === "normal" && theme === "dark") {
    color = "#fff";
  }

  return (
    <div style={{ color: color }} className={styles.priority}>
      {TASK_PRIORITY_ICONS[priority]}
      <span style={style} className={`${styles.priorityText}`}>
        {priority} {withAddition && "priority"}
      </span>
    </div>
  );
};

export default PriorityIndicator;

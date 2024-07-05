import { PRIORITY_STYLES, TASK_PRIORITY_ICONS } from "@/constants";

import styles from "./PriorityIndicator.module.scss";

const PriorityIndicator = ({ priority, withAddition, style }) => {
  return (
    <div
      style={{ color: PRIORITY_STYLES[priority] }}
      className={styles.priority}
    >
      {TASK_PRIORITY_ICONS[priority]}
      <span style={style} className={`${styles.priorityText}`}>
        {priority} {withAddition && "priority"}
      </span>
    </div>
  );
};

export default PriorityIndicator;

import { PRIOTITY_STYLES, TASK_PRIORITY_ICONS } from "@/constants";

import styles from "./PriorityIndicator.module.scss";

const PriorityIndicator = ({ priority, withAddition }) => {
  return (
    <div
      style={{ color: PRIOTITY_STYLES[priority] }}
      className={styles.priority}
    >
      {TASK_PRIORITY_ICONS[priority]}
      <p className={`${styles.priorityText}`}>
        {priority} {withAddition && "priority"}
      </p>
    </div>
  );
};

export default PriorityIndicator;

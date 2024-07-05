import { STATUS_BG_STYLES } from "@/constants";
import styles from "./PriorityStatus.module.scss";
import PriorityIndicator from "../PriorityIndicator";

const PriorityStatus = ({ priority }) => {
  const bg = STATUS_BG_STYLES[priority];

  return (
    <div style={{ backgroundColor: bg }} className={styles.status}>
      <PriorityIndicator
        style={{ textTransform: "uppercase", fontWeight: "bold" }}
        priority={priority}
        withAddition
      />
    </div>
  );
};

export default PriorityStatus;

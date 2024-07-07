import { useMemo } from "react";
import PriorityIndicator from "../PriorityIndicator";

import { STATUS_BG_STYLES } from "@/constants";
import styles from "./PriorityStatus.module.scss";

const PriorityStatus = ({ priority }) => {
  const bg = useMemo(() => STATUS_BG_STYLES[priority], [priority]);
  const border = useMemo(
    () => (priority === "normal" ? "1px solid #000" : "unset"),
    [priority],
  );

  return (
    <div
      style={{
        backgroundColor: bg,
        border: border,
      }}
      className={styles.status}
    >
      <PriorityIndicator
        style={{
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
        priority={priority}
        withAddition
      />
    </div>
  );
};

export default PriorityStatus;

import { TASK_TYPE } from "@/constants";

import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import styles from "./StageCircle.module.scss";

const StageCircle = ({ stage, className }) => {
  return (
    <div
      style={{ backgroundColor: TASK_TYPE[stage] }}
      className={`${className} ${styles.circle}`}
      title={capitalizeFirstLetter(stage)}
    />
  );
};

export default StageCircle;

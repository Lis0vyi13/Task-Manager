import { MdOutlineMessage, MdOutlineDoneAll } from "react-icons/md";
import { FaThumbsUp, FaUser, FaBug } from "react-icons/fa";
import { RiProgress5Line } from "react-icons/ri";

import styles from "./TaskTypeIcon.module.scss";

const TASK_TYPE_ICON = {
  commented: (
    <div className={`${styles.icon} ${styles.iconCommented}`}>
      <MdOutlineMessage />
    </div>
  ),
  started: (
    <div className={`${styles.icon} ${styles.iconStarted}`}>
      <FaThumbsUp />
    </div>
  ),
  assigned: (
    <div className={`${styles.icon} ${styles.iconAssigned}`}>
      <FaUser />
    </div>
  ),
  bug: (
    <div className={`${styles.icon} ${styles.iconBug}`}>
      <FaBug size={24} />
    </div>
  ),
  completed: (
    <div className={`${styles.icon} ${styles.iconCompleted}`}>
      <MdOutlineDoneAll size={24} />
    </div>
  ),
  "in progress": (
    <div className={`${styles.icon} ${styles.iconInProgress}`}>
      <RiProgress5Line size={16} />
    </div>
  ),
};

export default TASK_TYPE_ICON;

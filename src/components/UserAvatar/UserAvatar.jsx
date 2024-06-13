import getInitials from "../../utils/getInitials";

import styles from "./UserAvatar.module.scss";

const UserAvatar = ({ fullname }) => {
  return (
    <button className={styles.avatar}>
      {fullname ? getInitials(fullname) : "OL"}
    </button>
  );
};

export default UserAvatar;

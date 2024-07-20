import { summary } from "@/constants";

import styles from "./DevelopersBody.module.scss";
import DeveloperItem from "./DeveloperItem";

const DevelopersBody = () => {
  return (
    <tbody className={styles.developersTableBody}>
      {summary.users.map((user) => (
        <DeveloperItem key={user._id} user={user} />
      ))}
    </tbody>
  );
};

export default DevelopersBody;

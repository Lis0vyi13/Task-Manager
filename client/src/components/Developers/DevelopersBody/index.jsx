import { useGetUsersQuery } from "@/redux/features/user/UserSlice";
import DeveloperItem from "./DeveloperItem";

import styles from "./DevelopersBody.module.scss";

const DevelopersBody = () => {
  const { data: users } = useGetUsersQuery();

  return (
    <tbody className={styles.developersTableBody}>
      {users?.map((user, i) => (
        <DeveloperItem isLastChild={i + 1 === users.length} key={user._id} user={user} />
      ))}
    </tbody>
  );
};

export default DevelopersBody;

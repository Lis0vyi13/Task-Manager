import { motion } from "framer-motion";

import Title from "@/ui/Title";
import Button from "@/ui/Button";

import Team from "../Team";

import { fadeSlideUpVariants, formatDate, summary } from "@/constants";

import styles from "./Members.module.scss";

const Members = () => {
  const users = summary.users;
  const titles = ["Full Name", "Role", "Email", "Status", "Created at"];

  const addUserHandler = () => {};

  return (
    <section className={styles.members}>
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Title>Team members</Title>

        <Button onClick={addUserHandler} className={styles.button}>
          + Add new user
        </Button>
      </motion.header>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
        className={`${styles.listView} ${
          users.length > 0 ? styles.notEmpty : ""
        }`}
      >
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              {titles.map((title) => (
                <th key={title} className={`${styles.th}`}>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {users.map((user) => (
              <tr key={user._id} className={styles.tr}>
                <td className={styles.td}>
                  <div className={styles.team}>
                    <Team
                      {...user}
                      className={styles.avatar}
                      avatarClassName={styles.avatar}
                      infoClassName={styles.info}
                      side={"right"}
                      team={[user]}
                    />
                    <p className={styles.name}>{user.name}</p>
                  </div>
                </td>
                <td className={styles.td}>
                  <p>{user.role}</p>
                </td>
                <td className={styles.td}>
                  <p>{user.email}</p>
                </td>
                <td className={styles.td}>
                  <div
                    style={{
                      backgroundColor: user.isActive ? "#BFDBFE" : "#FEF3C7",
                      color: user.isActive ? "#1D4ED8" : "#000",
                    }}
                    className={styles.status}
                  >
                    <p>{user?.isActive ? "Active" : "Disabled"}</p>
                  </div>
                </td>
                <td className={styles.td}>
                  <p>{formatDate(new Date(user.createdAt))}</p>
                </td>
                <td className={`${styles.actions} ${styles.td} `}>
                  <button className={styles.editBtn}>Edit</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>
    </section>
  );
};
export default Members;

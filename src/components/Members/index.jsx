import { motion } from "framer-motion";

import Title from "@/ui/Title";
import Button from "@/ui/Button";

import Table from "./Table";

import { fadeSlideUpVariants, summary } from "@/constants";

import styles from "./Members.module.scss";

const Members = () => {
  const users = summary.users;
  const titles = ["Full Name", "Role", "Email", "Status", "Created at"];

  const tableData = { users, titles };
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
        <Table {...tableData} />
      </motion.section>
    </section>
  );
};

export default Members;

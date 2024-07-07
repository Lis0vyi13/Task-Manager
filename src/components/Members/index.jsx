import { useMemo } from "react";
import { motion } from "framer-motion";

import Title from "@/ui/Title";
import Button from "@/ui/Button";

import Table from "./Table";

import { fadeSlideUpVariants, summary } from "@/constants";

import styles from "./Members.module.scss";
import useSearch from "@/hooks/useSearch";

const titles = ["Full Name", "Role", "Email", "Status", "Created at"];

const Members = () => {
  const query = useSearch();

  const users = useMemo(() => {
    return query
      ? summary.users.filter((user) =>
          user?.name?.toLowerCase().includes(query?.toLowerCase()),
        )
      : summary.users;
  }, [query]);

  const tableData = useMemo(() => ({ users, titles }), [users]);
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
        {users.length > 0 ? <Table {...tableData} /> : "No users found"}
      </motion.section>
    </section>
  );
};

export default Members;

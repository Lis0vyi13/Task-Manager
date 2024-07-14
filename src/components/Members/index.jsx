import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";

import useSearch from "@/hooks/useSearch";

import Title from "@/ui/Title";
import Button from "@/ui/Button";
import AddUser from "@/ui/Modals/AddUser";

import Table from "./Table";

import { fadeSlideUpVariants, summary } from "@/constants";

import styles from "./Members.module.scss";

const titles = ["Full Name", "Role", "Email", "Status", "Created at"];

const Members = () => {
  const query = useSearch();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const users = useMemo(() => {
    return query
      ? summary.users.filter((user) =>
          user?.name?.toLowerCase().includes(query?.toLowerCase()),
        )
      : summary.users;
  }, [query]);

  const tableData = useMemo(() => ({ users, titles }), [users]);
  const addUserHandler = useCallback(() => {
    setIsUserModalOpen(true);
  }, []);

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
        {isUserModalOpen && (
          <AddUser
            changedValue={isUserModalOpen}
            onClose={() => setIsUserModalOpen(false)}
          />
        )}
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

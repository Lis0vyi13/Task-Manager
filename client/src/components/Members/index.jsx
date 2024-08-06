import { useMemo } from "react";
import { motion } from "framer-motion";

import useSearch from "@/hooks/useSearch";

import Title from "@/ui/Title";

import Table from "./Table";

import { fadeSlideUpVariants } from "@/constants";

import styles from "./Members.module.scss";
import { useSelector } from "react-redux";

const titles = ["Full Name", "Role", "Email", "Status", "Created at"];

const Members = () => {
  const query = useSearch();
  const { users: allUsers } = useSelector((store) => store.user);
  const users = useMemo(() => {
    return query
      ? allUsers?.filter((user) => user?.name?.toLowerCase().includes(query?.toLowerCase()))
      : allUsers;
  }, [allUsers, query]);

  const tableData = useMemo(() => ({ users, titles }), [users]);

  return (
    <section className={styles.members}>
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Title>Team members</Title>
      </motion.header>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
        className={`${styles.listView} ${users?.length > 0 ? styles.notEmpty : ""}`}
      >
        {users?.length > 0 ? <Table {...tableData} /> : "No users found"}
      </motion.section>
    </section>
  );
};

export default Members;

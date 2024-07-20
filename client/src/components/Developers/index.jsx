import { motion } from "framer-motion";

import DevelopersTableHead from "./DevelopersHead";
import DevelopersTableBody from "./DevelopersBody";

import { fadeSlideUpVariants } from "@/constants";
import styles from "./Developers.module.scss";

const Developers = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeSlideUpVariants}
      viewport={{ once: true }}
      className={styles.developers}
    >
      <table className={styles.table}>
        <DevelopersTableHead />
        <DevelopersTableBody />
      </table>
    </motion.section>
  );
};

export default Developers;

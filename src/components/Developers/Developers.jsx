import { motion } from "framer-motion";

import DevelopersTableHead from "./DevelopersTableHead/DevelopersTableHead";
import DevelopersTableBody from "./DevelopersTableBody/DevelopersTableBody";

import styles from "./Developers.module.scss";

const Developers = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
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

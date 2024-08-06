import { motion } from "framer-motion";
import useUser from "@/hooks/useUser";
import useTrash from "./useTrash";
import { toast } from "sonner";

import Title from "@/ui/Title";
import Loader from "@/ui/Loader";
import QuestionModal from "@/ui/Modals/QuestionModal";

import Table from "./Table";

import { MdDelete, MdRestore } from "react-icons/md";
import { fadeSlideUpVariants } from "@/constants";

import styles from "./Trash.module.scss";

const titles = ["Full Name", "Priority", "Stage", "Modified on"];

const Trash = ({ tasks }) => {
  const {
    filteredTask,
    isLoading,
    tableData,
    modalType,
    setModalType,
    isQuestionModalOpen,
    openQuestionModal,
    closeQuestionModal,
    modalData,
    onDeleteLoading,
    onRestoreLoading,
  } = useTrash({
    tasks,
    titles,
  });

  const user = useUser();
  return (
    <section className={styles.trash}>
      <motion.header
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
      >
        <Title>Trash</Title>

        <div className={styles.trashActions}>
          <button
            onClick={() => {
              if (filteredTask?.length > 0) {
                openQuestionModal();
                setModalType("restoreAll");
              } else {
                toast.warning("You can't restore tasks because of trash is empty!");
              }
            }}
            className={styles.trashAction}
          >
            <MdRestore className={styles.actionIcon} />
            <p className={styles.actionText}>Restore all</p>
          </button>
          <button
            disabled={!user?.isAdmin}
            onClick={() => {
              if (filteredTask?.length > 0) {
                openQuestionModal();
                setModalType("deleteAll");
              } else {
                toast.warning("You can't delete tasks because of trash is empty!");
              }
            }}
            className={`${styles.trashAction} ${styles.deleteIcon}`}
          >
            <MdDelete className={styles.actionIcon} />
            <p className={styles.actionText}>Delete all</p>
          </button>
        </div>
        {isQuestionModalOpen && (
          <QuestionModal
            changedValue={isQuestionModalOpen}
            onClose={closeQuestionModal}
            isLoading={(onDeleteLoading, onRestoreLoading)}
            {...modalData[modalType]}
          />
        )}
      </motion.header>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeSlideUpVariants}
        className={`${styles.listView} ${filteredTask?.length > 0 ? styles.notEmpty : ""}`}
      >
        {isLoading ? (
          <Loader />
        ) : filteredTask?.length > 0 ? (
          <Table {...tableData} />
        ) : (
          "Trash is empty"
        )}
      </motion.section>
    </section>
  );
};

export default Trash;

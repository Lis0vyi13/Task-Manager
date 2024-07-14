import { useCallback, useState } from "react";

import useBreakpoints from "@/hooks/useBreakpoints";
import useModal from "@/hooks/useModal";

import EditUser from "@/ui/Modals/EditUser";
import QuestionModal from "@/ui/Modals/QuestionModal";
import Team from "@/components/Team";
import More from "@/components/More";

import { formatDate } from "@/constants";

import styles from "./Table.module.scss";

const Table = ({ users, titles }) => {
  const { isDesktop } = useBreakpoints();
  const [selectedUser, setSelectedUser] = useState(null);

  const [isEditModalOpen, openEditModal, closeEditModal] = useModal({
    setItem: setSelectedUser,
  });

  const [isQuestionModalOpen, openQuestionModal, closeQuestionModal] = useModal(
    {
      setItem: setSelectedUser,
    },
  );

  const onEditUserHandler = useCallback(() => {}, []);
  const onDeleteUserHandler = useCallback(() => {}, []);

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {isDesktop ? (
            titles.map((title) => (
              <th key={title} className={`${styles.th}`}>
                {title}
              </th>
            ))
          ) : (
            <th className={`${styles.th}`}>Full name</th>
          )}
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
            {isDesktop ? (
              <>
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
                  <button
                    onClick={() => openEditModal(user)}
                    className={styles.editBtn}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openQuestionModal(user)}
                    className={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </>
            ) : (
              <td>
                <More />
              </td>
            )}
            {isEditModalOpen && selectedUser?._id === user._id && (
              <EditUser
                changedValue={isEditModalOpen}
                onClose={closeEditModal}
                onSubmit={onEditUserHandler}
                user={selectedUser}
              />
            )}
            {isQuestionModalOpen && selectedUser?._id === user._id && (
              <QuestionModal
                changedValue={isQuestionModalOpen}
                onClose={closeQuestionModal}
                user={selectedUser}
                onSubmit={onDeleteUserHandler}
                type={"delete"}
                text={"Are you sure you want to delete current user?"}
                submitButtonText={"Delete"}
              />
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

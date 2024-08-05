import { useMemo } from "react";
import useTaskPopup from "@/hooks/useTaskPopup";
import useBreakpoints from "@/hooks/useBreakpoints";
import { useDeleteUserMutation } from "@/redux/features/user/UserSlice";
import useUser from "@/hooks/useUser";

import Team from "@/components/Team";
import More from "@/components/More";
import Popup from "@/ui/Popup";
import PopupItem from "@/components/PopupItem";
import QuestionModal from "@/ui/Modals/QuestionModal";
import EditUser from "@/ui/Modals/EditUser";

import { MdDelete, MdEdit } from "react-icons/md";
import { formatDate } from "@/constants";
import styles from "./MemberItem.module.scss";
import { toast } from "sonner";

const MemberItem = ({ user }) => {
  const {
    isEditModalOpen,
    closeEditModal,
    isQuestionModalOpen,
    closeQuestionModal,
    openQuestionModal,
    openEditModal,
    handleToggle,
    isOpened,
    isClosing,
    handleClose,
  } = useTaskPopup({ task: user });

  const currentUser = useUser();
  const { isDesktop } = useBreakpoints();
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const onDeleteHandler = async () => {
    try {
      await deleteUser(user._id).unwrap();
      toast.success("User was deleted successful");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  const OPTIONS = useMemo(
    () => [
      [
        {
          icon: { Icon: MdEdit, color: "#000" },
          title: "Edit",
          permission: false,
          onClick: openEditModal,
        },
      ],
      [
        {
          icon: { Icon: MdDelete, color: "red" },
          title: "Delete",
          permission: false,
          onClick: openQuestionModal,
        },
      ],
    ],
    [openEditModal, openQuestionModal],
  );

  return (
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
          <p className={styles.name}>
            {user.name} {user.surname}
          </p>
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
              title={!currentUser?.isAdmin ? "Administrator rights are needed" : null}
              disabled={!currentUser?.isAdmin}
              onClick={() => openEditModal(user)}
              className={styles.editBtn}
            >
              Edit
            </button>
            <button
              title={!currentUser?.isAdmin ? "Administrator rights are needed" : null}
              disabled={!currentUser?.isAdmin}
              onClick={() => openQuestionModal(user)}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </td>
        </>
      ) : (
        <td>
          <More onClick={handleToggle} />
          {isOpened && (
            <Popup className={`${styles.popup}`} isClosing={isClosing} handleClose={handleClose}>
              {OPTIONS.map((block) =>
                block.map((item, i) => (
                  <PopupItem
                    disabled={!currentUser?.isAdmin}
                    key={item.title}
                    className={i + 1 === block.length ? "divider" : ""}
                    icon={item.icon}
                    title={item.title}
                    handleClose={handleClose}
                    onClick={currentUser?.isAdmin ? item.onClick : undefined}
                  />
                )),
              )}
            </Popup>
          )}
        </td>
      )}

      {isEditModalOpen && (
        <EditUser changedValue={isEditModalOpen} onClose={closeEditModal} user={user} />
      )}

      {isQuestionModalOpen && (
        <QuestionModal
          changedValue={isQuestionModalOpen}
          onClose={closeQuestionModal}
          handler={onDeleteHandler}
          isLoading={isLoading}
          user={user}
          type={"delete"}
          text={"Are you sure you want to delete current user?"}
          submitButtonText={"Delete"}
        />
      )}
    </tr>
  );
};

export default MemberItem;

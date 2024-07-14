import { useMemo } from "react";
import moment from "moment";
import useTaskPopup from "@/hooks/useTaskPopup";
import useBreakpoints from "@/hooks/useBreakpoints";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";

import Team from "@/components/Team";
import More from "@/components/More";
import Popup from "@/ui/Popup";
import PopupItem from "@/components/BoardView/Task/PopupItem";
import EditDeleteModals from "@/components/EditDeleteModals/EditDeleteModals";
import QuestionModal from "@/ui/Modals/QuestionModal";

import { MdEdit, MdDelete } from "react-icons/md";
import styles from "./DeveloperItem.module.scss";

const DeveloperItem = ({ user }) => {
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

  const { isDesktop } = useBreakpoints();

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
    <tr key={user.name + " row"} className={styles.row}>
      <td className={styles.data}>
        <Team
          {...user}
          className={styles.avatar}
          avatarClassName={styles.avatar}
          infoClassName={styles.info}
          team={[user]}
        />
        <div className={styles.userInfo}>
          <p className={styles.name}>{user.name}</p>
          <span className={styles.role}>{user.role}</span>
        </div>
      </td>
      {isDesktop ? (
        <>
          <td className={styles.data}>
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
          <td className={styles.data}>
            <div className={styles.createdAt}>
              <p>{capitalizeFirstLetter(moment(user.createdAt).fromNow())}</p>
            </div>
          </td>
        </>
      ) : (
        <td>
          <More onClick={handleToggle} />
          {isOpened && (
            <Popup
              className={`${styles.popup}`}
              isClosing={isClosing}
              handleClose={handleClose}
            >
              {OPTIONS.map((block) =>
                block.map((item, i) => (
                  <PopupItem
                    disabled={item.permission}
                    key={item.title}
                    className={i + 1 === block.length ? styles.divider : ""}
                    icon={item.icon}
                    title={item.title}
                    handleClose={handleClose}
                    onClick={item.onClick}
                  />
                )),
              )}
            </Popup>
          )}
          {isEditModalOpen && (
            <EditDeleteModals
              user={user}
              isEditModalOpen={isEditModalOpen}
              closeEditModal={closeEditModal}
              isQuestionModalOpen={isQuestionModalOpen}
              closeQuestionModal={closeQuestionModal}
            />
          )}
          {isQuestionModalOpen && (
            <QuestionModal
              changedValue={isQuestionModalOpen}
              onClose={closeQuestionModal}
              task={user}
              type={"delete"}
              text={"Are you sure you want to delete the selected user?"}
              submitButtonText={"Delete"}
            />
          )}
        </td>
      )}
    </tr>
  );
};

export default DeveloperItem;

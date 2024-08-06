import getInitials from "@/utils/getInitials";

import styles from "./UserInfo.module.scss";
import ImageModal from "@/ui/Modals/Image";
import { useCallback, useState } from "react";

const UserInfo = ({ name, surname, title, email, color, avatar, avatarColor }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = useCallback((src) => {
    setSelectedImage(src);
  }, []);
  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className={`${styles.userInfo}`}>
      <div className={styles.content}>
        <div
          style={{
            backgroundColor: avatar ? "" : avatarColor,
            color: color,
          }}
          className={styles.avatar}
        >
          {avatar ? (
            <div
              onClick={() => handleImageClick(avatar)}
              className={"avatar" + " " + styles.avatarImg}
            >
              <img src={avatar} alt="user avatar" />
            </div>
          ) : (
            <span className={styles.initials}>{getInitials(name, surname)}</span>
          )}
        </div>
        <div className={styles.userInfoText}>
          <h1 className={styles.name}>
            {name} {surname}
          </h1>
          <h2 className={styles.role}>{title}</h2>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          changedValue={selectedImage}
          src={selectedImage}
          alt="Selected asset"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default UserInfo;

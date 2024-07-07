import { useEffect, useRef } from "react";
import styles from "./Team.module.scss";

const useTeam = ({ team }) => {
  const avatarRefs = useRef([]);
  const userInfoRefs = useRef([]);

  useEffect(() => {
    const avatars = avatarRefs.current;
    const handleAvatarClick = (i) => {
      return () => {
        const userInfo = userInfoRefs.current[i];
        if (userInfo) {
          userInfo.classList.toggle(styles.active);
        }
      };
    };

    const handleOutsideClick = (e) => {
      userInfoRefs.current.forEach((userInfo, i) => {
        if (userInfo && userInfo.classList.contains(styles.active)) {
          if (avatars[i] && !avatars[i].contains(e.target)) {
            userInfo.classList.remove(styles.active);
          }
        }
      });
    };

    avatars.forEach((avatar, i) => {
      if (avatar) {
        const boundClickHandler = handleAvatarClick(i);
        avatar.addEventListener("click", boundClickHandler);
        avatar.boundClickHandler = boundClickHandler;
      }
    });

    document.addEventListener("click", handleOutsideClick);

    return () => {
      avatars.forEach((avatar) => {
        if (avatar && avatar.boundClickHandler) {
          avatar.removeEventListener("click", avatar.boundClickHandler);
          delete avatar.boundClickHandler;
        }
      });
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [team]);

  return { avatarRefs, userInfoRefs };
};

export default useTeam;

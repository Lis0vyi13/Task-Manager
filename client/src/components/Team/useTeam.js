import { useEffect, useRef } from "react";
import styles from "./Team.module.scss";

const useTeam = ({ team }) => {
  const avatarRefs = useRef([]);
  const userInfoRefs = useRef([]);

  useEffect(() => {
    const avatars = avatarRefs.current;
    const userInfos = userInfoRefs.current;

    const handleAvatarClick = (i) => {
      return () => {
        const userInfo = userInfos[i];
        if (userInfo) {
          userInfo.classList.toggle(styles.active);
        }
      };
    };

    const handleOutsideClick = (e) => {
      userInfos.forEach((userInfo, i) => {
        if (userInfo && userInfo.classList.contains(styles.active)) {
          if (!userInfos[i].contains(e.target) && !avatars[i].contains(e.target)) {
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

    userInfos.forEach((userInfo) => {
      if (userInfo) {
        userInfo.addEventListener("click", (e) => {
          if (!e.target.closest(".avatar")) e.stopPropagation();
        });
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

      userInfos.forEach((userInfo) => {
        if (userInfo) {
          userInfo.removeEventListener("click", (e) => e.stopPropagation());
        }
      });

      document.removeEventListener("click", handleOutsideClick);
    };
  }, [team]);

  return { avatarRefs, userInfoRefs };
};

export default useTeam;

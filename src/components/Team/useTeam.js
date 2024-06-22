import { useEffect, useRef } from "react";

import styles from "./Team.module.scss";

const useTeam = ({ team }) => {
  const avatarRefs = useRef([]);
  const userInfoRefs = useRef([]);

  useEffect(() => {
    avatarRefs.current.forEach((avatar, i) => {
      const userInfo = userInfoRefs.current[i];

      const onAvatarClickHandler = () => {
        userInfo.classList.add(styles.active);
      };

      const outsideClickHandler = (e) => {
        if (!userInfo.classList.contains(styles.active)) return;
        if (avatar && !avatar.contains(e.target)) {
          userInfo.classList.remove(styles.active);
        }
      };

      avatar.addEventListener("click", onAvatarClickHandler);
      document.addEventListener("click", (e) => outsideClickHandler(e));
      return () => avatar.removeEventListener("click", onAvatarClickHandler);
    });
  }, [team]);

  return { avatarRefs, userInfoRefs };
};

export default useTeam;

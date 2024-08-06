import { createPortal } from "react-dom";
import Loader from "@/ui/Loader";

import styles from "./LoaderOnLoading.module.scss";

const LoaderOnLoading = ({ isLoading }) => {
  return (
    isLoading &&
    createPortal(
      <div className={styles.loaderOnLoading}>
        <Loader />
      </div>,
      document.body,
    )
  );
};

export default LoaderOnLoading;

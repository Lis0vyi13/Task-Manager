import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import useActions from "@/hooks/useActions";
import useAuth from "@/hooks/useAuth";

const useLayout = () => {
  const isLoggedIn = useAuth();
  const isMobileSidebarOpen = useSelector(
    (state) => state.sidebar.isMobileSidebarOpen,
  );
  const { theme } = useSelector((state) => state.page);

  const sidebarRef = useRef();

  const { closeMobileSidebar, toggleMobileSidebar } = useActions();
  const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width;

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 900px)");

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        closeMobileSidebar();
      }
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMobileSidebarOpen, closeMobileSidebar, toggleMobileSidebar]);

  useEffect(() => {
    document.documentElement.style.setProperty("--offset", sidebarWidth + "px");
  }, [sidebarWidth]);

  useEffect(() => {
    document.body.style.overflow = isMobileSidebarOpen ? "hidden" : "auto";
  }, [isMobileSidebarOpen]);

  return { isLoggedIn, sidebarRef, isMobileSidebarOpen };
};

export default useLayout;
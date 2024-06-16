import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import useActions from "@/hooks/useActions";
import useAuth from "@/hooks/useAuth";

const useLayout = () => {
  const isLoggedIn = useAuth();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const { toggleSidebar, closeSidebar } = useActions();

  const sidebarRef = useRef();
  const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 900px)");

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        closeSidebar();
      }
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isSidebarOpen, closeSidebar, toggleSidebar]);

  useEffect(() => {
    document.documentElement.style.setProperty("--offset", sidebarWidth + "px");
  }, [sidebarWidth]);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return { isLoggedIn, sidebarRef, isSidebarOpen };
};

export default useLayout;

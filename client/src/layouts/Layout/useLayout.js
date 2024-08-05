import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useActions from "@/hooks/useActions";
import useAuth from "@/hooks/useAuth";
import { useGetDashboardStatsQuery, useGetTasksQuery } from "@/redux/features/tasks/TaskSlice";
import { useGetUserQuery, useGetUsersQuery } from "@/redux/features/user/UserSlice";

const useLayout = () => {
  const isLoggedIn = useAuth();
  const isMobileSidebarOpen = useSelector((state) => state.sidebar.isMobileSidebarOpen);
  const { theme } = useSelector((state) => state.page);
  const { data: tasks } = useGetTasksQuery();
  const { data: users } = useGetUsersQuery();
  const { data: userData } = useGetUserQuery();
  const { data: dashboardStats } = useGetDashboardStatsQuery();
  const sidebarRef = useRef();
  const {
    closeMobileSidebar,
    toggleMobileSidebar,
    setTasks,
    setUsers,
    setUser,
    setDashboardStats,
  } = useActions();
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData?.user) {
      setUser(userData.user);
    }
    setTasks(tasks);
    setUsers(users);
    setDashboardStats(dashboardStats);
  }, [
    dashboardStats,
    setDashboardStats,
    setTasks,
    setUser,
    setUsers,
    tasks,
    userData?.user,
    users,
  ]);

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
    const sidebarWidth = sidebarRef.current?.getBoundingClientRect().width;
    document.documentElement.style.setProperty("--offset", sidebarWidth + "px");
  }, [sidebarRef]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isMobileSidebarOpen && !e.target.closest("aside")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (isMobileSidebarOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", handleScroll, { passive: false });
    } else {
      document.body.style.overflow = "unset";
      document.removeEventListener("touchmove", handleScroll, {
        passive: false,
      });
    }

    return () => {
      document.removeEventListener("touchmove", handleScroll, {
        passive: false,
      });
    };
  }, [isMobileSidebarOpen]);

  return { isLoggedIn, sidebarRef, isMobileSidebarOpen };
};

export default useLayout;

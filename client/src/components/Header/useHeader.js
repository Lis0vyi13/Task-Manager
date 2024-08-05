import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import useActions from "@/hooks/useActions";
import useDebounce from "@/hooks/useDebounce";

const useHeader = () => {
  const { register, reset, watch } = useForm({ mode: "onChange" });
  const debouncedSearchValue = useDebounce(watch("searchQuery"), 500);
  const { toggleMobileSidebar, setQuery, resetQuery } = useActions();
  const { pathname } = useLocation();
  const isMobileSidebarOpen = useSelector((state) => state.sidebar.isMobileSidebarOpen);

  const handleReset = () => {
    reset({ searchQuery: "" });
    resetQuery();
  };

  useEffect(() => {
    setQuery(debouncedSearchValue);
  }, [debouncedSearchValue, setQuery]);

  const validPaths = useMemo(
    () => ["/tasks", "/to-do", "/in-progress", "/completed", "/team", "/trash"],
    [],
  );

  const isSearchVisible = useMemo(() => validPaths.includes(pathname), [pathname, validPaths]);

  return {
    isSearchVisible,
    handleReset,
    isMobileSidebarOpen,
    toggleMobileSidebar,
    register,
    watch,
  };
};

export default useHeader;

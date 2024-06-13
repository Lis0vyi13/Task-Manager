import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { authActions } from "@/store/slices/auth.slice";
import { sidebarActions } from "@/store/slices/sidebar.slice";

const rootActions = { ...authActions, ...sidebarActions };

const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;

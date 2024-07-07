import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { authActions } from "@/features/auth/AuthSlice";
import { userActions } from "@/features/user/UserSlice";
import { sidebarActions } from "@/features/sidebar/SidebarSlice";
import { searchActions } from "@/features/search/SearchSlice";

const rootActions = {
  ...authActions,
  ...userActions,
  ...sidebarActions,
  ...searchActions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;

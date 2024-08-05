import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { authActions } from "@/redux/features/auth/AuthSlice";
import { userActions } from "@/redux/features/user/UserSlice";
import { sidebarActions } from "@/redux/features/sidebar/SidebarSlice";
import { searchActions } from "@/redux/features/search/SearchSlice";
import { pageActions } from "@/redux/features/page/PageSlice";
import { tasksActions } from "@/redux/features/tasks/TaskSlice";

const rootActions = {
  ...authActions,
  ...userActions,
  ...sidebarActions,
  ...searchActions,
  ...pageActions,
  ...tasksActions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;

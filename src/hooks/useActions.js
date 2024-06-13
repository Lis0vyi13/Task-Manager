import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth.slice";

const rootActions = { ...authActions };

const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;

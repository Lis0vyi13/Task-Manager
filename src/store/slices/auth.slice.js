import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, { payload }) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logOut(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

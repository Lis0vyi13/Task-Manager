import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: !!localStorage.getItem("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, { payload }) {
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logOut(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

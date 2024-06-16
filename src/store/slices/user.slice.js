import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeAvatar(state, { payload }) {
      state.avatar = payload;
    },
    changePassword(state, { payload }) {
      state.password = payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn() {
      return true;
    },
    logOut() {
      return false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;

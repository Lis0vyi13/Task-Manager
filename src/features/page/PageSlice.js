import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const PageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload;
    },
  },
});

export const pageActions = PageSlice.actions;
export default PageSlice.reducer;

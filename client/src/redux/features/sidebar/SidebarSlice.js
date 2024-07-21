import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("sidebar")
  ? JSON.parse(localStorage.getItem("sidebar"))
  : {
      isDesktopSidebarOpen: true,
      isMobileSidebarOpen: false,
    };

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleMobileSidebar(state) {
      state.isMobileSidebarOpen = !state.isMobileSidebarOpen;
      localStorage.setItem("sidebar", JSON.stringify(state));
    },
    closeMobileSidebar(state) {
      state.isMobileSidebarOpen = false;
      localStorage.setItem("sidebar", JSON.stringify(state));
    },
    toggleDesktopSidebar(state) {
      state.isDesktopSidebarOpen = !state.isDesktopSidebarOpen;
      localStorage.setItem("sidebar", JSON.stringify(state));
    },
  },
});

export const sidebarActions = sidebarSlice.actions;
export default sidebarSlice.reducer;

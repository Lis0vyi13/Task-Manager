import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/features/auth/AuthSlice";
import userReducer from "@/features/user/UserSlice";
import sidebarReducer from "@/features/sidebar/SidebarSlice";

import api from "@/api/api";

import authMiddleware from "@/features/middlewares/AuthMiddleware";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    user: userReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(authMiddleware),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/features/auth/AuthSlice";
import userReducer from "@/features/user/UserSlice";
import sidebarReducer from "@/features/sidebar/SidebarSlice";
import searchReducer from "@/features/search/SearchSlice";
import pageReducer from "@/features/page/PageSlice";

import api from "@/api/api";

import authMiddleware from "@/features/middlewares/AuthMiddleware";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    user: userReducer,
    sidebar: sidebarReducer,
    search: searchReducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(authMiddleware),
});

export default store;

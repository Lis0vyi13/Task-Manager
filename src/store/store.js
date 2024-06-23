import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice";
import userReducer from "./slices/user.slice";
import sidebarReducer from "./slices/sidebar.slice";

import api from "./api";
import authMiddleware from "./middleware/authMiddleware";

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

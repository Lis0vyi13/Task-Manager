import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice";
import sidebarReducer from "./slices/sidebar.slice";
import api from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;

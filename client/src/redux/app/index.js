import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/AuthSlice";
import userReducer from "../features/user/UserSlice";
import sidebarReducer from "../features/sidebar/SidebarSlice";
import searchReducer from "../features/search/SearchSlice";
import pageReducer from "../features/page/PageSlice";
import tasksReducer from "../features/tasks/TaskSlice";

import api from "../api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    user: userReducer,
    sidebar: sidebarReducer,
    search: searchReducer,
    page: pageReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;

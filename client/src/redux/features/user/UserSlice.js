import api from "@/redux/api";
import { createSlice } from "@reduxjs/toolkit";

import { decodeCookie } from "@/utils/decodeCookie";

const USER_URL = "/user";
const initialState = {
  user: JSON.parse(decodeCookie("__u")),
  users: [],
};

export const UserApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `${USER_URL}/profile`,
      providesTags: ["User"],
    }),
    getUsers: builder.query({
      query: () => `${USER_URL}/get-team`,
      providesTags: ["User"],
    }),
    getNotifications: builder.query({
      query: () => `${USER_URL}/notifications`,
      providesTags: ["Notifications"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["User", "Tasks"],
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/change-password`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
    markNotification: builder.mutation({
      query: ({ readType, id, data }) => ({
        url: `${USER_URL}/read-notification?readType=${readType}${id ? `&id=${id}` : ""}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Notifications"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useGetUserQuery,
  useGetNotificationsQuery,
  useGetUsersQuery,
  useChangePasswordMutation,
  useMarkNotificationMutation,
  useDeleteUserMutation,
} = UserApiSlice;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setUsers(state, { payload }) {
      state.users = payload;
    },
    clearUser(state) {
      state.user = null;
    },
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

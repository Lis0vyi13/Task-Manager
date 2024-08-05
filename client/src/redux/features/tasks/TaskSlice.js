import { createSlice } from "@reduxjs/toolkit";
import api from "@/redux/api";

// import { decodeCookie } from "@/utils/decodeCookie";

const initialState = {
  tasks: [],
  dashboardStats: {},
};

const TASKS_URL = "/task";

export const TaskApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `${TASKS_URL}`,
      providesTags: ["Tasks"],
    }),
    getTask: builder.query({
      query: (id) => `${TASKS_URL}/${id}`,
      providesTags: ["Tasks"],
    }),
    getDashboardStats: builder.query({
      query: () => `${TASKS_URL}/dashboard`,
      providesTags: ["Tasks"],
    }),
    getTrashedTasks: builder.query({
      query: () => `${TASKS_URL}/trash-tasks`,
      providesTags: ["Tasks"],
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/create`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tasks", "Notifications"],
    }),
    updateTask: builder.mutation({
      query: ({ data, id }) => ({
        url: `${TASKS_URL}/update/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    addSubtask: builder.mutation({
      query: (data, id) => ({
        url: `${TASKS_URL}/create-subtask/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateSubtask: builder.mutation({
      query: (data, id) => ({
        url: `${TASKS_URL}/update-subtask/${id}`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateStage: builder.mutation({
      query: ({ data, id }) => ({
        url: `${TASKS_URL}/${id}/stage`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    toggleSubtaskDone: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/subtask/done`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    postComment: builder.mutation({
      query: ({ data, id }) => ({
        url: `${TASKS_URL}/activity/${id}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    moveTaskToTrash: builder.mutation({
      query: ({ data, id }) => ({
        url: `${TASKS_URL}/${id}`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `${TASKS_URL}/delete-restore/${id}`,
        method: "DELETE",
        params: { actionType: "delete" },
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteAllTasks: builder.mutation({
      query: () => ({
        url: `${TASKS_URL}/delete-restore`,
        method: "DELETE",
        params: { actionType: "deleteAll" },
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    restoreTask: builder.mutation({
      query: ({ id }) => ({
        url: `${TASKS_URL}/delete-restore/${id}`,
        method: "DELETE",
        params: { actionType: "restore" },
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
    restoreAllTasks: builder.mutation({
      query: () => ({
        url: `${TASKS_URL}/delete-restore`,
        method: "DELETE",
        params: { actionType: "restoreAll" },
        credentials: "include",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetDashboardStatsQuery,
  useCreateTaskMutation,
  useGetTaskQuery,
  useGetTrashedTasksQuery,
  useAddSubtaskMutation,
  useUpdateSubtaskMutation,
  useToggleSubtaskDoneMutation,
  usePostCommentMutation,
  useUpdateTaskMutation,
  useUpdateStageMutation,
  useMoveTaskToTrashMutation,
  useDeleteTaskMutation,
  useRestoreTaskMutation,
  useDeleteAllTasksMutation,
  useRestoreAllTasksMutation,
} = TaskApiSlice;

const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, { payload }) {
      state.tasks = payload;
    },
    setDashboardStats(state, { payload }) {
      state.dashboardStats = payload;
    },
  },
});

export const tasksActions = TasksSlice.actions;
export default TasksSlice.reducer;

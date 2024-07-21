import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http:/localhost:8800/api";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default api;

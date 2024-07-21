import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, { payload }) {
      state.query = payload;
    },
    resetQuery(state) {
      state.query = "";
    },
  },
});

export const searchActions = SearchSlice.actions;
export default SearchSlice.reducer;

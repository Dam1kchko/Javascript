import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchValue: "" };

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    adjust(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;

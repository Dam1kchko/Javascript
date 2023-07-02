import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const stockSlice = createSlice({
  name: "stockList",
  initialState,
  reducers: {
    fillStockList(state, action) {
      return action.payload;
    },
  },
});

export const stocksActions = stockSlice.actions;
export default stockSlice.reducer;

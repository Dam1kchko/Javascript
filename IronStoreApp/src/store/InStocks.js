import { createSlice } from "@reduxjs/toolkit";

const initialState = { isInStocksOn: false };

const inStockSlice = createSlice({
  name: "isStockOn",
  initialState,
  reducers: {
    toggle(state) {
      state.isInStocksOn = !state.isInStocksOn;
    },
  },
});

export const inStockActions = inStockSlice.actions;
export default inStockSlice.reducer;

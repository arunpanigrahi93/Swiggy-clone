import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Inc: (state) => {
      state.prevCount = state.count; // <== store prev value
      state.count += 1; // <== update to new value
    },
    Dec: (state) => {
      state.prevCount = state.count; // <== store prev value
      if (state.count === 0) {
        return;
      } else {
        state.count -= 1; // <== update to new value
      }
    },
  },
});

export const { Inc, Dec } = counter.actions;

export default counter.reducer;

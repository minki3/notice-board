import { createSlice } from "@reduxjs/toolkit";

const conuterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export default conuterSlice;

import { createSlice } from "@reduxjs/toolkit";

const MinusSlice = createSlice({
  name: "minusSlice",
  initialState: { value: 0 },
  reducers: {
    down: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export default MinusSlice;

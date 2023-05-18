import { createSlice } from "@reduxjs/toolkit";

const boolean = createSlice({
  name: "boolean",
  initialState: { value: true },
  reducers: {
    toggle: (state, action) => {
      state.value = !state.value;
    },
  },
});

export default boolean;

import { configureStore } from "@reduxjs/toolkit";
import conuterSlice from "./counterSlice";
import MinusSlice from "./MinusSlice";

const Store = configureStore({
  reducer: {
    counter: conuterSlice.reducer,
    minus: MinusSlice.reducer,
  },
});

export default Store;

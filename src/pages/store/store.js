import { configureStore } from "@reduxjs/toolkit";
import conuterSlice from "./counterSlice";
import MinusSlice from "./MinusSlice";
import Boolean from "./boolean";

const Store = configureStore({
  reducer: {
    counter: conuterSlice.reducer,
    minus: MinusSlice.reducer,
    boolean: Boolean.reducer,
  },
});

export default Store;

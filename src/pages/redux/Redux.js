import React from "react";
import { useSelector, useDispatch } from "react-redux";
import conuterSlice from "../store/counterSlice";
import MinusSlice from "../store/MinusSlice";

const Redux = () => {
  const count = useSelector((state) => {
    return state.counter.value;
  });

  const dispatch = useDispatch();
  const minus = useSelector((state) => {
    return state.minus.value;
  });
  return (
    <>
      <div>{count}</div>
      <div>{minus}</div>

      {/* <button
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          dispatch({ type: "minus" });
        }}
      >
        minus
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button> */}
      <button
        onClick={() => {
          dispatch(conuterSlice.actions.up(1));
        }}
      ></button>
      <button
        onClick={() => {
          dispatch(MinusSlice.actions.down(2));
        }}
      ></button>
    </>
  );
};

export default Redux;

// app/components/Counter.tsx
"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store/store";
import { increment, decrement } from "../redux/slices/exampleSlice";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.value);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

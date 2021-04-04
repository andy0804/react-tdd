import React, { useState } from "react";
import "./App.css";
export const Counter = () => {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>This is a counter app</h1>
      <button
        onClick={() => {
          if (counter < 29) setCounter(counter + 1);
        }}
        id="increment-btn"
      >
        increment
      </button>
      <div id="counter-value">{counter}</div>

      <button
        onClick={() => {
          if (counter > 0) setCounter(counter - 1);
        }}
        id="decrement-btn"
      >
        decrement
      </button>
    </div>
  );
};

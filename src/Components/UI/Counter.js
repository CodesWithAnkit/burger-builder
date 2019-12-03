import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  };

  const decrement = () => {
    setState(state - 1);
  };

  return (
    <div className="counter">
      {state}
      <button onClick={increment} className="danger">
        -
      </button>
      <button onClick={decrement} className="success">
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;

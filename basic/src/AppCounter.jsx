import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count + count2} {count > 10 ? "🔥" : "❄️"}
      </div>

      {/*  */}
      <div className="counter">
        <span className="number">{count}</span>
        <button
          className="button"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Add +
        </button>
      </div>

      {/*  */}
      <div className="counter">
        <span className="number">{count2}</span>
        <button
          className="button"
          onClick={() => {
            setCount2((prev) => prev + 1);
          }}
        >
          Add +
        </button>
      </div>
      {/*  */}
    </div>
  );
}

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
        fontSize: "40px",
        textAlign: "center",
        margin: "20px auto",
        padding: "20px",
        width: "280px",
      }}
    >
      <p>Count: {count}</p>
      <button
        style={{
          padding: "8px 15px",
          margin: "5px",
          fontSize: "14px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#6ecffc",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{
          backgroundColor: "grey",
          color: "white",
          fontSize: "14px",
          borderRadius: "5px",
          border: "none",
          padding: "8px 15px",
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <button
        style={{
          padding: "8px 15px",
          fontSize: "14px",
          margin: "5px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#6ecffc",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
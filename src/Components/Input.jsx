import { useState } from "react";

function Field() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
        padding: "20px",
        textAlign: "center",
        outline: "1px solid #6ecffc",
        borderRadius: "10px",
        backgroundColor: "#f4f4f4",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>Type something:</h3>
      <input
        style={{
          width: "90%",
          padding: "10px",
          fontSize: "16px",
          marginTop: "10px",
          borderRadius: "5px",
          border: "1px solid #6ecffc",
        }}
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default Field;
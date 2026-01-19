import { useState } from "react";

function AddFruit() {
  const [input, setInput] = useState("");
  const [fruit, setFruits] = useState(["Apple", "Banana", "Orange"]);

  const addFruit = () => {
    if (input.trim() !== "") {
      setFruits([...fruit, input.trim()]);
      setInput("");
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#6ecffc",
        borderRadius: "20px",
        textAlign: "center",
        margin: "20px auto",
        color: "white",
        padding: "20px",
        width: "400px",
      }}
    >
      <h2>Add a Fruit</h2>
      <input
        style={{ padding: "10px", margin: "10px 5px", width: "250px" }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter fruit name"
      />
      <button
        style={{
          padding: "10px 20px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "black 1px solid",
          cursor: "pointer",
        }}
        onClick={addFruit}
      >
        Add Fruit
      </button>
      <h3>Fruit List:</h3>
      <ul>
        {fruit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default AddFruit;

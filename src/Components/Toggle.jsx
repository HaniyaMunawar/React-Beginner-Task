import { useState } from "react";

function Toggle() {
    const [show, setShow] = useState(false);
    return (
        <div style={{
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            fontSize: "20px",
            textAlign: "center",
            margin: "20px auto",
            padding: "20px",
            width: "300px",
        }}>
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#6ecffc",
                    color: "white",
                    cursor: "pointer",
                }}

                onClick={() => setShow(!show)}
            >   
                {show ? "Hide" : "Show"} Message
            </button>
            {show && <p style={{ marginTop: "20px" }}>This is a toggled message!</p>}
        </div>
    );
}
export default Toggle;
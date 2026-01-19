function WelcomeMessage() {
  return (
    <div style={{
        background: "#97d9f8",
        margin: "20px",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        color: "#fff",
        boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{lineHeight: "2px"}}>Welcome to React Syntax!</h2>
      <p style={{lineHeight: "0px"}}>This is a simple React application demonstrating various components.</p>
    </div>
  );
}
export default WelcomeMessage;
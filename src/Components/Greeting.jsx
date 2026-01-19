function Greeting({ name }) {
  return(
    <div style={{
        backgroundColor: "#6ecffc",
        color: "#fff",
        padding: "10px",
        borderRadius: "60px",
        textAlign: "center",
        margin: "10px 60px",
        boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.1)"
    }}>
        <h2>Hello, {name}!</h2>
    </div>
  )
}
export default Greeting;
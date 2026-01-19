function FruitList(){
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    return (
        <div style={{
            backgroundColor: "#6ecffc",
            padding: "15px",
            borderRadius: "20px",
            width: "300px",
            margin: "20px auto",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            color: "#fff",
            textAlign: "center"
        }}>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}
export default FruitList;
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "엘리";
  return (
    <>
      <h1 className="orange">Hello!</h1>
      <h2>hi!</h2>
      <p>{name}</p>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>
      <img
        style={{ width: "300px", height: "200px" }}
        src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="cute"
      ></img>
    </>
  );
}

export default App;

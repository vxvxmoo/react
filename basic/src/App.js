import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "엘리";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>hi!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
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

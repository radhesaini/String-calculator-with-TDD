import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [userQuery, setQuery] = useState("");
  let [result, setResult] = useState([]);

  const add = () => {
    userQuery = userQuery
      .replaceAll("//", ";")
      .replaceAll("\\n", ";")
      .replaceAll(",", ";");
    let digitsArray = userQuery.split(";");
    let sum = 0;
    let errorBucket = [];
    for (let item of digitsArray) {
      if (item < 0) {
        errorBucket.push(`negative numbers not allowed ${item}`);
        continue;
      } else if (item === ";" || !item) {
        continue;
      }
      sum += parseInt(item);
    }
    if (errorBucket.length) {
      setResult(errorBucket);
    } else {
      setResult([sum]);
    }
    setQuery("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">String Calculator</h1>
      </header>
      <div className="calculator-container">
        <label htmlFor="user-Input">Ask me: </label>
        <input
          id="user-Input"
          className="input-text"
          type="text"
          name="user_input"
          value={userQuery}
          data-testid="user-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="calculator-btn"
          data-testid="calculator-btn"
          onClick={add}
        >
          Calculate
        </button>
        <div className="result-container" data-testid="result-container">
          {result.map((item) => (
            <div className="result" key={new Date()}>
              Result = {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

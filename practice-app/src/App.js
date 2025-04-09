import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [isNotValid, setIsNotValid] = useState(false);
  function addValue() {
    console.log("value added");
    if (counter > 0) {
      setIsNotValid(false);
    }
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    //This will only increment value by 1
  }
  //This function will increment value by 5
  function addFiveValue() {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  function removeValue() {
    if (counter === 0) {
      setIsNotValid(true);
      return;
    }
    setCounter(counter - 1);
  }
  return (
    <>
      <div className="container">
        <h1>Counter apps</h1>
        <h2>Counter Value : {counter}</h2>

        <button className="btn btn-primary" onClick={addValue}>
          Add value
        </button>
        <br />
        <br />
        <button className="btn btn-primary" onClick={addFiveValue}>
          Add value by 5
        </button>
        <br />
        <br />
        <button
          className="btn btn-danger"
          disabled={isNotValid && true}
          onClick={removeValue}
        >
          Remove value
        </button>
        <br />
        <br />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "Nakul",
    age: 23,
  };
  let myObj2 = {
    username: "Tejas",
    age: 23,
  };
  let newArr = [1, 2, 3, 4, 5];
  return (
    <>
      <Card
        channel="Nakul"
        someObj={myObj}
        newArr={newArr}
        btnText="Click ME"
      />
      <br />
      <Card
        channel="Tejas"
        someObj={myObj2}
        newArr={newArr}
        btnText="OK"
        cancelText="Remove"
      />
    </>
  );
}

export default App;

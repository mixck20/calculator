import './App.css';
import { useState } from "react";

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {

  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (num1 === null) {
      setNum1(value);
      setDisp(value);
    } else if (op === null) {
      setNum1(num1 + value);
      setDisp(num1 + value);
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
    console.log(num1 + '|' + op + '|' + num2)
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }

  const equalsClickHandler = () => {
    if (num1 !== null && num2 !== null && op !== null) {
      let result;

      if (op === "+") {
        result = parseInt(num1) + parseInt(num2);
      } else if (op === "-") {
        result = parseInt(num1) - parseInt(num2);
      } else if (op === "*") {
        result = parseInt(num1) * parseInt(num2);
      } else if (op === "/" || op === "÷") {
        result = parseInt(num1) / parseInt(num2);
      } else {
        result = 0;
      }

      setDisp(result);
      setNum1(null);
      setNum2(null);
      setOp(null);
    }
  }

  const clearClickHandler = () => {
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  return (
    <div className="App">
      <h2>Calculator of Jordan Micko Deloria - IT3A</h2>
      <div className="Calc">
        <div className="Display">
          <Display display={disp} />
        </div>
        <div className="Buttons">
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={"÷"} clickHandler={opClickHandler} />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={"*"} clickHandler={opClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={"-"} clickHandler={opClickHandler} />
          <Key label={"C"} clickHandler={clearClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label={"="} clickHandler={equalsClickHandler} />
          <Key label={"+"} clickHandler={opClickHandler} />
          {}
          <Key label={"DELORIA"} clickHandler={() => setDisp("Jordan Micko Deloria")} className="DeloriaButton" />
        </div>
      </div>
    </div>
  );
}

export default App;

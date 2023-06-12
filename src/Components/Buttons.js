import React, { useState } from 'react'
import "./Buttons.css"
import { tan, sin, cos, asin, acos, atan, sinh, cosh, tanh, factorial, pow, sqrt, log10, log2 } from 'mathjs';
export default function Buttons(props) {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [display, setDisplay] = useState(0);
  const [styleAdd, setStyleAdd] = useState({});
  const [styleSubtract, setStyleSubtract] = useState({});
  const [styleMultiply, setStyleMultiply] = useState({});
  const [styleDivision, setStyleDivision] = useState({});
  const [operation, setOperation] = useState("");
  const [singleFirstValue, setSingleFirstValue] = useState(false);
  const [singleSecondValue, setSingleSecondValue] = useState(false);
  const [appendValue, setAppendValue] = useState("");
  const [appendSecondValue, setAppendSecondValue] = useState("");
  const [operatorPressed, setOperatorPressed] = useState(false);
  const [currentSelected, setCurrentSelected] = useState("");
  const [decimal, setDecimal] = useState(false);
  const [negative, setNegative] = useState(false);

  function setValue(val) {
    if (operatorPressed === false) {
      if (decimal === true) {
        setFirst(parseFloat(first + val));
        setDisplay(parseFloat(first + val));
        setDecimal(false);
      }
      else if (singleFirstValue === false) {
        setFirst(val);
        setAppendValue(val);
        setSingleFirstValue(true);
        setDisplay(val);
        setCurrentSelected("first");

      } else {
        let appendf = parseInt("" + appendValue + val);
        setDisplay(appendf);
        setAppendValue(appendf);
        setFirst(appendf);
        setCurrentSelected("first");
      }
    } else {
      if (decimal === true) {
        setSecond(parseFloat(second + val));
        setDisplay(parseFloat(second + val));
        setDecimal(false);
      }
      else if (singleSecondValue === false) {
        setSecond(val);
        setAppendSecondValue(val);
        setSingleSecondValue(true);
        setDisplay(val);
        setCurrentSelected("second");
      } else {
        let appends = parseInt("" + appendSecondValue + val);
        setDisplay(appends);
        setAppendSecondValue(appends);
        setSecond(appends);
        setCurrentSelected("second");
      }
    }
  }
  const compute = () => {
    setCurrentSelected("none");
    if (operation === "+") {
      add();
    } else if (operation === "-") {
      sub();
    } else if (operation === "*") {
      mult();
    } else if (operation === "÷") {
      div();
    } else if (operation === "x^2") {
      raisePower2();
    } else if (operation === "x^3") {
      raisePower3();
    } else if (operation === "1/x") {
      divideX();
    } else if (operation === "2√x") {
      root2X();
    } else if (operation === "3√x") {
      root3X();
    } else if (operation === "2^x") {
      power2ofX();
    } else if (operation === "log10") {
      logarithm10();
    } else if (operation === "log2") {
      logarithm2();
    } else if (operation === "x^y") {
      xpowerY();
    }
  }
  const add = () => {
    if (operatorPressed === false) {
      setDisplay(second + display);
      setFirst(second + display);
    } else if (operatorPressed === true) {
      setDisplay(first + second);
      setFirst(first + second);
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const sub = () => {
    if (operatorPressed === false) {
      setDisplay((display - second).toFixed(1));
      setFirst((display - second).toFixed(1));
    } else if (operatorPressed === true) {
      setDisplay((first - second).toFixed(1));
      setFirst((first - second).toFixed(1));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const mult = () => {
    if (operatorPressed === false) {
      setDisplay(((second * display).toFixed(1)));
      setFirst((second * display).toFixed(1));
    } else if (operatorPressed === true) {
      setDisplay((first * second).toFixed(1));
      setFirst((first * second).toFixed(1));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const div = () => {
    if (operatorPressed === false) {
      setDisplay((display / second).toFixed(1));
      setFirst((display / second).toFixed(1));
    } else if (operatorPressed === true) {
      setDisplay((first / second).toFixed(1));
      setFirst((first / second).toFixed(1));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const raisePower2 = () => {
    if (operatorPressed === false) {
      setDisplay((pow(display, 2).toFixed(1)));
      setFirst((pow(display, 2).toFixed(1)));
    } else if (operatorPressed === true) {
      setDisplay((pow(display, 2).toFixed(1)));
      setFirst((pow(display, 2).toFixed(1)));
      setOperatorPressed(false);
      setSingleSecondValue(false);

    }
  }
  const raisePower3 = () => {
    if (operatorPressed === false) {
      setDisplay((pow(display, 3).toFixed(2)));
      setFirst((pow(display, 3).toFixed(2)));
    } else if (operatorPressed === true) {
      setDisplay((pow(display, 3).toFixed(2)));
      setFirst((pow(display, 3).toFixed(2)));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const divideX = () => {
    if (operatorPressed === false) {
      setDisplay((1 / display).toFixed(2));
      setFirst((1 / display).toFixed(2));
    } else if (operatorPressed === true) {
      setDisplay((1 / display).toFixed(2));
      setFirst((1 / display).toFixed(2));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const root2X = () => {
    if (operatorPressed === false) {
      setDisplay((2 * (sqrt(display))).toFixed(2));
      setFirst((2 * (sqrt(display))).toFixed(2));
    } else if (operatorPressed === true) {
      setDisplay((2 * (sqrt(display))).toFixed(2));
      setFirst((2 * (sqrt(display))).toFixed(2));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const root3X = () => {
    if (operatorPressed === false) {
      setDisplay((3 * sqrt(display)).toFixed(2));
      setFirst((3 * sqrt(display)).toFixed(2));
    } else if (operatorPressed === true) {
      setDisplay((3 * sqrt(display)).toFixed(2));
      setFirst((3 * sqrt(display)).toFixed(2));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const power2ofX = () => {
    if (operatorPressed === false) {
      setDisplay(pow(2, display).toFixed(2));
      setFirst(pow(2, display).toFixed(2));
    } else if (operatorPressed === true) {
      setDisplay(pow(2, display).toFixed(2));
      setFirst(pow(2, display).toFixed(2));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const logarithm10 = () => {
    if (operatorPressed === false) {
      setDisplay(log10(display).toFixed(4));
      setFirst(log10(display).toFixed(4));
    } else if (operatorPressed === true) {
      setDisplay(log10(display).toFixed(4));
      setFirst(log10(display).toFixed(4));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const logarithm2 = () => {
    if (operatorPressed === false) {
      setDisplay((log2(display)).toFixed(4));
      setFirst((log2(display)).toFixed(4));
    } else if (operatorPressed === true) {
      setDisplay((log2(display)).toFixed(4));
      setFirst((log2(display)).toFixed(4));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const xpowerY = () => {
    if (operatorPressed === false) {
      setDisplay(pow(display, second).toFixed(3));
      setFirst(pow(display, second).toFixed(3));
    } else if (operatorPressed === true) {
      setDisplay(pow(first, second).toFixed(3));
      setFirst(pow(first, second).toFixed(3));
      setOperatorPressed(false);
      setSingleSecondValue(false);
    }
  }
  const negate = () =>{

  }
  const selectedStyle = {
    backgroundColor: "white",
    color: "black",
    transition: "all 0.25s"
  }
  const originalStyle = {
    backgroundColor: "rgb(120, 180, 47)",
    color: "white",
    transition: "all 0.25s"
  }
  const operatorSelectedStyle = {
    backgroundColor: "rgb(120, 180, 47)",
    color: "white",
    transition: "all 0.25s"
  }
  const operatorOriginalStyle = {
    backgroundColor: "color: rgb(80, 71, 71)",
    color: "white",
    transition: "all 0.25s"
  }
  return (
    <div className="mycontainer">
      <div className="display">
        <input type="text" value={display} onChange={(e) => { setDisplay(e.target.value) }} />
      </div>
      <div className="functions mt-3">
        <button onClick={() => {
          setDisplay(sin(first));
          setFirst(sin(display));
        }}
          className="dark-brown">sin</button>
        <button onClick={() => {
          setDisplay(cos(first));
          setFirst(cos(display));
        }}
          className="dark-brown">cos</button>
        <button onClick={() => {
          setDisplay(tan(first));
          setFirst(tan(display));
        }}
          className="dark-brown">tan</button>
        <button onClick={() => {
          setDisplay(0);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setFirst(0);
          setSecond(0);
          setOperation("");
          setAppendValue("");
          setAppendSecondValue("");
          setOperatorPressed(false);
          setSingleFirstValue(false);
          setSingleSecondValue(false);
          setCurrentSelected("");
          setDecimal(false);
          setNegative(false);
        }}
          className="light-brown">AC</button>
        <button onClick={() => {
          setNegative(true);
          if (currentSelected === "first") {
            setFirst(parseFloat("" + "-" + first));
            setDisplay(parseFloat("" + "-" + first));
          } else if (currentSelected === "second") {
            setSecond(parseFloat("" + "-" + second));
            setDisplay(parseFloat("" + "-" + second));
          } else if (currentSelected === "none") {
            setDisplay(parseFloat("" + "-" + display));
            setFirst(parseFloat("" + "-" + display));
          }
        }}
          className="light-brown">+/-</button>
        <button onClick={() => {
          setDisplay(first / 100);
          setFirst(first / 100);
        }}
          className="light-brown">%</button>
        <button onClick={() => {
          setDecimal(true);
          if (currentSelected === "first") {
            setDisplay(first + ".");
            setFirst(first + ".");
          } else if (currentSelected === "second") {
            setDisplay(second + ".");
            setSecond(second + ".");
          }
        }} className="light-brown">.</button>
        <button style={styleDivision} onClick={() => {
          setStyleDivision(selectedStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setOperation("÷");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }}
          className="green">÷</button><br />

        <button onClick={() => {
          setDisplay(pow(display, 2));
          setFirst(pow(display, 2));
          setOperation("x^2");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }}
          className="dark-brown">x^2</button>
        <button onClick={() => {
          setDisplay(pow(display, 3));
          setFirst(pow(display, 3));
          setOperation("x^3");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }} className="dark-brown">x^3</button>
        <button onClick={() => {
          setDisplay(pow(2, display));
          setFirst(pow(2, display));
          setOperation("2^x");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }} className="dark-brown">2^x</button>
        <button style={{}} onClick={() => {
          setStyleAdd(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleMultiply(originalStyle);
          setStyleDivision(originalStyle);
          setOperation("x^y");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }}
          className="dark-brown">x^y</button>
        <button onClick={() => {
          setDisplay(7);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setValue(7);
        }}
          className="light-brown">7</button>
        <button onClick={() => {
          setDisplay(8);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setValue(8);
        }}
          className="light-brown">8</button>
        <button onClick={() => {
          setDisplay(9);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setValue(9);
        }}
          className="light-brown">9</button>
        <button style={styleAdd} onClick={() => {
          setStyleAdd(selectedStyle);
          setStyleSubtract(originalStyle);
          setStyleMultiply(originalStyle);
          setStyleDivision(originalStyle);
          setOperation("+");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }}
          className="green">+</button><br />
        <button onClick={() => {
          if (display < 0) {
            setDisplay("Error");
          } else
            setDisplay(factorial(display));
        }} className="dark-brown">x!</button>
        <button onClick={() => {
          setDisplay(asin(display));
          setFirst(asin(display));
        }}
          className="dark-brown">sin-1</button>
        <button onClick={() => {
          setDisplay(acos(display));
          setFirst(acos(display));
        }}
          className="dark-brown">cos-1</button>
        <button onClick={() => {
          setDisplay(atan(first));
          setFirst(atan(display));
        }} className="dark-brown">tan-1</button>
        <button onClick={() => {
          setDisplay(4);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setValue(4);
        }} className="light-brown">4</button>
        <button onClick={() => {
          setDisplay(5);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setValue(5);
        }}
          className="light-brown">5</button>
        <button onClick={() => {
          setDisplay(6);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setValue(6);
        }}
          className="light-brown">6</button>
        <button style={styleMultiply} onClick={() => {
          setStyleMultiply(selectedStyle);
          setStyleAdd(originalStyle);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setOperation("*");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }}
          className="green">X</button>
        <button onClick={() => {
          setDisplay(1 / display);
          setFirst(1 / display);
          setOperation("1/x");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }} className="dark-brown">1/x</button>
        <button onClick={() => {
          setDisplay(2 * (sqrt(display)));
          setFirst(2 * (sqrt(display)));
          setOperation("2√x");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }} className="dark-brown">2√x</button>
        <button onClick={() => {
          setDisplay(3 * (sqrt(display)));
          setFirst(3 * (sqrt(display)));
          setOperation("3√x");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }} className="dark-brown">3√x</button>
        <button onClick={() => {
          setDisplay(log10(display));
          setFirst(log10(display));
          setOperation("log10");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }}
          className="dark-brown">log10</button>
        <button onClick={() => {
          setDisplay(1);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setStyleDivision(originalStyle);
          setValue(1);
        }}
          className="light-brown">1</button>
        <button onClick={() => {
          setDisplay(2);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setStyleDivision(originalStyle);
          setValue(2);
        }}
          className="light-brown">2</button>
        <button onClick={() => {
          setDisplay(3);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setStyleDivision(originalStyle);
          setValue(3);
        }}
          className="light-brown">3</button>
        <button style={styleSubtract} onClick={() => {
          setStyleSubtract(selectedStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setStyleDivision(originalStyle);
          setOperation("-");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }}
          className="green">-</button>
        <button onClick={() => {
          setDisplay(sinh(first));
          setFirst(sinh(display));
        }} className="dark-brown">sinh</button>
        <button onClick={() => {
          setDisplay(cosh(first));
          setFirst(cosh(display));
        }} className="dark-brown">cosh</button>
        <button onClick={() => {
          setDisplay(tanh(first));
          setFirst(tanh(display));
        }} className="dark-brown">tanh</button>
        <button onClick={() => {
          setDisplay(log2(display));
          setFirst(log2(display));
          setOperation("log2");
          setOperatorPressed(true);
          setSingleSecondValue(false);
        }} className="dark-brown">log2</button>
        <button onClick={() => {
          setDisplay(0);
          setStyleDivision(originalStyle);
          setStyleSubtract(originalStyle);
          setStyleAdd(originalStyle);
          setStyleMultiply(originalStyle);
          setValue(0);
        }}
          className="light-brown" style={{ borderRadius: "39px", width: "180px", height: "48px", color: "white", fontSize: "16px", marginRight: "2px", marginTop: "2px", marginLeft: "1px" }}>0</button>
        <button onClick={compute} className="green">=</button>
      </div>
    </div>
  )
}

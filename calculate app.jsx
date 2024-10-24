import React, { useState } from "react";
import "./Calculator.css"; 

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <h2>{result}</h2>
      </div>
      <div className="buttons">
        <button onClick={handleInput} value="1">1</button>
        <button onClick={handleInput} value="2">2</button>
        <button onClick={handleInput} value="3">3</button>
        <button onClick={handleInput} value="+">+</button>
        <button onClick={handleInput} value="4">4</button>
        <button onClick={handleInput} value="5">5</button>
        <button onClick={handleInput} value="6">6</button>
        <button onClick={handleInput} value="-">-</button>
        <button onClick={handleInput} value="7">7</button>
        <button onClick={handleInput} value="8">8</button>
        <button onClick={handleInput} value="9">9</button>
        <button onClick={handleInput} value="*">*</button>
        <button onClick={handleInput} value="0">0</button>
        <button onClick={handleInput} value=".">.</button>
        <button onClick={clearInput}>C</button>
        <button onClick={handleInput} value="/">/</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;

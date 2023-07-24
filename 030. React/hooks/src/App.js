import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {

  const [value, updateValue] = useState(0);
  const [multiplication, setMultiplication] = useState(0);

  useEffect( () => {
    setMultiplication(value * 3);
  });

  return (
    <div>
      <h1>Multiply</h1>
      <p>The answer is: {multiplication}!</p>
      <p>Number to multiply:</p>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          updateValue(e.target.value)
        }}
      />
    </div>
  );
}

export default App;

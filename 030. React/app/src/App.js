import './App.css';
import React, { useState } from "react";

const App = () => {

  const [formState, setFormState] = useState({ desc: "", age: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newFormState = {
      ...formState, [name]: value
    }
    setFormState(newFormState);
  }

  return (
    <div>
      <p>Tell us a little about yourself?</p>
      <textarea
        name="desc"
        placeholder="ex. What's your favorite movie?"
        value={formState.desc}
        onChange={handleChange}
      />
    
        <p>What's your age?</p>
      <select
        name="age"
        value={formState.age}
        onChange={handleChange}
      >
        <option value="" selected>---</option>
        <option value="< 18 years">Less than 18 years</option>
        <option value="18-24 years">18-24 years</option>
        <option value="25-29 years">25-29 years</option>
        <option value="> 30 years">30 years or older</option>
      </select>
    </div>
  )
}

export default App;

import React, { useState } from "react";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [name, seName] = useState("");
  const [heading, setHeading] = useState("");
  const clickHandler = () => {
    setHeading(name);
  };
  const changeHandler = (event) => {
    const value = event.target.value;
    seName(value);
  };
  const mouseOverHandler = () => {
    setIsOver(true);
  };
  const mouseOutHandler = () => {
    setIsOver(false);
  };

  return (
    <div className="container">
      <h1>Hello, {heading}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={changeHandler}
        value={name}
      />
      <button
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        onClick={clickHandler}
        style={{ backgroundColor: isOver ? "rgba(0, 0, 0, 5)" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

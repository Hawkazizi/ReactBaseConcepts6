import React, { useState } from "react";

function App() {
  const [isSubmited, setIsSubmited] = useState("Hello");
  const [isOver, setIsOver] = useState(false);
  const clickHandler = () => {
    setIsSubmited("Submited");
  };
  const mouseOverHandler = () => {
    setIsOver(true);
  };
  const mouseOutHandler = () => {
    setIsOver(false);
  };

  return (
    <div className="container">
      <h1>{isSubmited}</h1>
      <input type="text" placeholder="What's your name?" />
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

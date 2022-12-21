import React, { useState } from "react";

function App() {
  const [inputItems, setInputItems] = useState("");
  const [items, setItems] = useState(["enter a value"]);
  const changeHandler = (event) => {
    const value = event.target.value;
    setInputItems(value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setItems((prevItems) => {
      return [inputItems, ...prevItems];
    });
    setInputItems("");
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={inputItems} />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

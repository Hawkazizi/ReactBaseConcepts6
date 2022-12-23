import React, { useState } from "react";
import Items from "./items";
function App() {
  const [inputItems, setInputItems] = useState("");
  const [items, setItems] = useState(["hi"]);

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
  const deleteHandeler = (id) => {
    console.log(id);
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
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
          {items.map((todoItem, index) => (
            <Items
              key={index}
              id={index}
              text={todoItem}
              delete={deleteHandeler}
            />
          ))}
        </ul>
        <h4>DoubleClick:remove//singleClick:line-Through</h4>
      </div>
    </div>
  );
}

export default App;

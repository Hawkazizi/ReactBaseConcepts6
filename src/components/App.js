import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const [isOver, setIsOver] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }
  const mouseOverHandler = () => {
    setIsOver(true);
  };
  const mouseOutHandler = () => {
    setIsOver(false);
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={changeHandler}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={changeHandler}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={changeHandler}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
          style={{ backgroundColor: isOver ? "black" : "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

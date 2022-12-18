import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper.js";
import "./App.css";
function App() {
  const timeUp = new Date().toLocaleTimeString();
  const [time, setTime] = useState(timeUp);
  console.log(time);
  const clickHandler = () => {
    const newTimeUp = new Date().toLocaleTimeString();
    setTime(newTimeUp);
  };
  return (
    <Wrapper>
      <h1 className="time">{time}</h1>
      <button className="Update" onClick={clickHandler}>
        Update time
      </button>
    </Wrapper>
  );
}

export default App;

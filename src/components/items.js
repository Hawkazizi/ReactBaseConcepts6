import { useState } from "react";

const Items = (props) => {
  const [lineOver, setLineOver] = useState(false);
  //   const [deletion, setDeletion] = useState(false);
  //   const clickHandler = () => {
  //     setDeletion(props.delete);
  //   };
  const clickHandler = () => {
    setLineOver((prevLine) => {
      return !prevLine;
    });
  };
  const deleteHandler = () => {
    props.delete(props.id);
  };
  return (
    <div onDoubleClick={deleteHandler} onClick={clickHandler}>
      <li style={{ textDecoration: lineOver ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};
export default Items;

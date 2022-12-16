import React from "react";

function Note(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.content}</h2>
    </div>
  );
}

export default Note;

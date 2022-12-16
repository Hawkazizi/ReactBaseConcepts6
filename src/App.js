import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Notess from "./components/notes.js";
function App() {
  const createNote = (noteItem) => {
    return (
      <div className="note">
        <Note title={noteItem.title} content={noteItem.content} />;
      </div>
    );
  };
  return (
    <div>
      <Header />
      {Notess.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;

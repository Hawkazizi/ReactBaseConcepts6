import React from "react";
import emojipedia from "./components/emojipedia.js";
import Entry from "./components/Entry";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiTh) => {
          return (
            <Entry
              key={emojiTh.id}
              emoji={emojiTh.emoji}
              name={emojiTh.name}
              description={emojiTh.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;

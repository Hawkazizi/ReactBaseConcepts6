import App from "./components/App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Opretter en React root ved hjælp af den nye createRoot API
// Dette er entry point for hele React applikationen
ReactDOM.createRoot(document.getElementById("root")).render(
  // BrowserRouter wrapper gør det muligt at bruge routing i appen
  // Den håndterer browser navigation og URL changes
  <BrowserRouter>
    {/* App komponenten er root komponenten som indeholder alle andre komponenter */}
    {/* Den kan modtage props fra parent komponenter, men her får den ingen props */}
    <App />
  </BrowserRouter>
);

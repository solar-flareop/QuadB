import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ShowProvider } from "./context/ShowContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShowProvider>
      <App />
    </ShowProvider>
  </React.StrictMode>
);

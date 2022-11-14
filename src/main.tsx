import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {UserInputProvider } from "./context/userInputContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserInputProvider>
      <App />
    </UserInputProvider>
  </React.StrictMode>
);

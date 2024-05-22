import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//this acts as a saving component for App.jsx
//index.css is a css

/// this is main JavaScript File
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

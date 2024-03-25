import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Login";
import Navbar from "./Navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login />
    <Navbar />
  </React.StrictMode>
);

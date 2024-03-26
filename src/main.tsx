import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FamilyGrid from "./Components/FamilyGrid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeopleGrid from "./Components/PeopleGrid";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FamilyGrid />} />
        <Route path="/family/:familyId" element={<PeopleGrid />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

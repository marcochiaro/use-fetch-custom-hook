import React from "react";
import ReactDOM from "react-dom/client";
import Planets from "./Planets";
import PlanetDetail from "./PlanetDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Planets />
    <PlanetDetail />
  </React.StrictMode>
);

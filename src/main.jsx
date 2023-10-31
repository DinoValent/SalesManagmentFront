import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { SalesApp } from "./SalesApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SalesApp />
    </BrowserRouter>
  </React.StrictMode>
);

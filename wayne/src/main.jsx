import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Fetured from "./components/fetured"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Home />
    {/* <Fetured/> */}
  </BrowserRouter>
);

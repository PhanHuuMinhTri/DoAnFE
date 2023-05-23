import React from "react";
import { BrowserRouter } from "react-router-dom";

import { RootRouter } from "./routers/Root";

import "./App.css";
import "./assets/fonts/font.css";

const App = () => {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
};

export default App;

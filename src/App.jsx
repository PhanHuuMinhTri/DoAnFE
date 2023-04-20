import React from "react";
import { BrowserRouter } from "react-router-dom";

import { RootRouter } from "./routers/Root";

import "./App.less";

const App = () => {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
};

export default App;

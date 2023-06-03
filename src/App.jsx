import React from "react";
import { BrowserRouter } from "react-router-dom";

import { RootRouter } from "./routers/Root";
import Suspense from "./components/suspense/Suspense";

import "./App.css";
import "./assets/fonts/font.css";

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Suspense />}>
        <RootRouter />
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;

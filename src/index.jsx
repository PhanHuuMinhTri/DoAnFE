import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setLanguage } from "./utils/utils";
import reportWebVitals from "./reportWebVitals";

const language = localStorage.getItem("language") || "en";

setLanguage(language);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();

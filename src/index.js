import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import "./style.css";
import reportWebVitals from "./reportWebVitals";

import Navbar from "./Component/Navbar";
import Main from "./Component/Main";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());

reportWebVitals();

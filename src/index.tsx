import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Quizprovider } from "./context/Quizcontext";

import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Quizprovider>
      <Router>
        <App />
      </Router>
    </Quizprovider>
  </React.StrictMode>,
  document.getElementById("root")
);

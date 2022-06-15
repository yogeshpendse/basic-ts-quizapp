import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Quizprovider } from "./context/Quizcontext";

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

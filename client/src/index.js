import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
  ,
  document.getElementById("root")
);

serviceWorker.unregister();

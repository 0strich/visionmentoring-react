import React from "react";
import ReactDOM from "react-dom";
// NPM Modules
import { Provider } from "react-redux";
import App from "./App";
// redux, redux-saga configure
import configure from "./store/configure";

const store = configure();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

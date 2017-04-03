// @flow
// external imports
import React from "react";
import { render } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
// store & types
import configureStore from "./state/store";
import todosTypes from "./state/ducks/todos";
// containers & components
import App from "./views/App";
// css & assets
import "./index.css";

const reduxStore: todosTypes.Store = configureStore(window.REDUX_INITIAL_DATA);

render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);

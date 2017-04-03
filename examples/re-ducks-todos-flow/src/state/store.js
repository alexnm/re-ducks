// @flow
import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./ducks"; // import all reducers from ducks/index.js

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState: any = {}) {
  const rootReducer = combineReducers(reducers);
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware()
  );
}
/* eslint-enable */

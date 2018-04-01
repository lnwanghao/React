import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import registerServiceWorker from "./registerServiceWorker";
import { reducer } from "./Reducer/index";
import App from "./Feature/App";
import "./index.less";
const logger = createLogger();
const store = createStore(
  reducer
  // { increase: 1, decrease: -1 }
  //   applyMiddleware(logger)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

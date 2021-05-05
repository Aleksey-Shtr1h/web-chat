import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.scss";

import { App } from "./pages/App/App";

import { rootReducer } from "./redux/rootRaducer.js";
import { OperationUser } from "./redux/user/userReducer.js";

const init = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.dispatch(OperationUser.userAuthCheck());

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();

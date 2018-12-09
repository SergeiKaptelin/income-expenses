import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {hashHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";

import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./utils/createStore";

const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

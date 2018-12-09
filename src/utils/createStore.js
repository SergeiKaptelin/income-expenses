import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import {routerReducer} from "react-router-redux";
import thunk from "redux-thunk";

import * as reducers from "../reducers/index";

const enhancer = compose(
  applyMiddleware(
    thunk,
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

const reducer = combineReducers({
  ...reducers,
  form: reduxFormReducer.plugin({
  }),
  routing: routerReducer,
});

const configureStore = (initialState = {}) => {
  return createStore(reducer, initialState, enhancer);
};

export default configureStore;

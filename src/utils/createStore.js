import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import {routerReducer} from "react-router-redux";
import thunk from "redux-thunk";

import * as reducers from "../reducers/index";
import transactionReducer from "../reducers/TransactionReducer";

const win = window || {};

const enhancer = compose(
  applyMiddleware(
    thunk,
  ),
  win.__REDUX_DEVTOOLS_EXTENSION__ ? win.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
);

const reducer = combineReducers({
  ...reducers,
  form: reduxFormReducer.plugin({
    addTransactionForm: transactionReducer,
  }),
  routing: routerReducer,
});

const configureStore = (initialState = {}) => {
  return createStore(reducer, initialState, enhancer);
};

export default configureStore;

import React, {Component} from "react";
import PropTypes from "prop-types";
import {Router, Route, Redirect} from "react-router";

import Layout from "../components/Layout/Layout";
import TransactionsContainer from "./Transactions/containers/TransactionsContainer";
import Overview from "./Overveiw/components/Overview";

class App extends Component {
  render() {
    const {history} = this.props;
    return (
      <Router history={history}>
        <Redirect
          from="/"
          to="/transactions"
          component={TransactionsContainer}
        />
        <Route
          path="/"
          component={Layout}
        >
          <Route
            path="/transactions"
            component={TransactionsContainer}
          />
          <Route
            path="/overview"
            component={Overview}
          />
        </Route>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;


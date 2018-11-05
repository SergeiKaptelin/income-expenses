import React, {Component} from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

import "../../styles/application.scss";
import styles from "./Layout.module.scss";

class Layout extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={styles.Layout}>
        <Header/>
        <div className={styles.Content}>
          {children}
        </div>
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;

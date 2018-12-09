import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({type, variety, children, className, ...rest}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      className={classNames(className, styles.Button, {
        [styles.Primary]: variety === "primary",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  variety: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  type: "button",
  variety: "primary",
};

export default Button;

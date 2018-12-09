import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./TextInput.module.scss";

const TextInput = ({className, label, input, autoComplete}) => {
  const trimValue = (value) => value.trim();
  return (
    <div className={classNames(styles.Wrap, className)}>
      {label && (
        <label
          htmlFor={input.name}
          className={styles.Label}
        >
          {label}
        </label>
      )}
      <input
        id={input.name}
        {...input}
        onBlur={() => input.onChange(trimValue(input.value))}
        autoComplete={autoComplete}
        className={styles.Field}
        type="text"
      />
    </div>
  );
};

TextInput.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

TextInput.defaultProps = {
  autoComplete: undefined,
  className: undefined,
  label: undefined,
};

export default TextInput;

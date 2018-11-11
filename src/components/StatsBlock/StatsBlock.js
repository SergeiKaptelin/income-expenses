import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {toPrice} from "../../utils/formattingUtils";

import styles from "./StatsBlock.module.scss";

const StatsBlock = ({text, value}) => {
  return (
    <div className={styles.StatsBlock}>
      <div className={styles.Title}>
        {text}
      </div>
      <div className={classNames(styles.Price, {
        [styles.Positive]: value >= 0,
        [styles.Negative]: value < 0,
      })}
      >
        {value > 0 ? "+" : ""}
        {toPrice(value)}
        {" "}
        UAH
      </div>
    </div>
  );
};

StatsBlock.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatsBlock;

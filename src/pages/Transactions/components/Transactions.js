import React from "react";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";

import StatsBlock from "../../../components/StatsBlock/StatsBlock";

import styles from "./Transactions.module.scss";
import NoTransaction from "../../../assets/header/no-transaction.svg";

const Transactions = ({walletBalance, totalChange, income, expense}) => {
  return (
    <div className={styles.Container}>
      <div>
        button
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <StatsBlock
            text="Текущий баланс кошелька"
            value={walletBalance}
          />
        </div>
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <StatsBlock
            text="Общее изменение за период"
            value={totalChange}
          />
        </div>
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <StatsBlock
            text="Общий расход за период"
            value={expense}
          />
        </div>
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <StatsBlock
            text="Общий доход за период"
            value={income}
          />
        </div>
      </div>
      <div className={styles.EmptyPeriod}>
        <SVG src={NoTransaction}>
          <img src={NoTransaction} alt="NoTransaction"/>
        </SVG>
        <div className={styles.EmptyPeriodText}>
          Вы еще не добавили ни одной операции.
        </div>
      </div>
    </div>
  );
};

Transactions.propTypes = {
  expense: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  totalChange: PropTypes.number.isRequired,
  walletBalance: PropTypes.number.isRequired,
};

export default Transactions;

import React from "react";
import SVG from "react-inlinesvg";

import StatsBlock from "../../../components/StatsBlock/StatsBlock";

import styles from "./Transactions.module.scss";
import NoTransaction from "../../../assets/header/no-transaction.svg";

const Transactions = () => {
  return (
    <div className={styles.Container}>
      <div>
        button
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <StatsBlock
            text="Текущий баланс кошелька"
            value={28790.00}
          />
        </div>
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <StatsBlock
            text="Общее изменение за период"
            value={0.00}
          />
        </div>
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <StatsBlock
            text="Общий расход за период"
            value={-10.00}
          />
        </div>
        <div className="col-xl-3 col-md-3 col-sm-6 col-xs-12">
          <StatsBlock
            text="Общий доход за период"
            value={10.00}
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

export default Transactions;

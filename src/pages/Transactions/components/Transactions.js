import React, {PureComponent} from "react";
import SVG from "react-inlinesvg";
import PropTypes from "prop-types";
import Modal from "react-modal";

import StatsBlock from "../../../components/StatsBlock/StatsBlock";
import Button from "../../../components/Button/Button";
import AddTransactionForm from "./AddTransactionForm";

import styles from "./Transactions.module.scss";
import NoTransaction from "../../../assets/header/no-transaction.svg";
import PlusRounded from "../../../assets/icons/plus-rounded.svg";

Modal.setAppElement("#root");

class Transactions extends PureComponent {
  state = {
    modalIsOpen: false,
  };

  handleOpenModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  render() {
    const {walletBalance, totalChange, income, expense, addTransactionSubmit} = this.props;
    const {modalIsOpen} = this.state;
    return (
      <div className={styles.Container}>
        <div className={styles.ControlsWrap}>
          <Button onClick={this.handleOpenModal}>
            <SVG src={PlusRounded}>
              <img src={PlusRounded} alt=""/>
            </SVG>
            <span className={styles.ButtonText}>
              Добавить транзакцию
            </span>
          </Button>
        </div>
        <Modal
          className={styles.Modal}
          overlayClassName={styles.ModalOverlay}
          isOpen={modalIsOpen}
          contentLabel="Transaction modal"
          onRequestClose={this.handleCloseModal}
        >
          <AddTransactionForm
            addTransactionSubmit={addTransactionSubmit}
          />
        </Modal>
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
  }
}

Transactions.propTypes = {
  addTransactionSubmit: PropTypes.func,
  expense: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  totalChange: PropTypes.number.isRequired,
  walletBalance: PropTypes.number.isRequired,
};

Transactions.defaultProps = {
  addTransactionSubmit: () => false,
};

export default Transactions;

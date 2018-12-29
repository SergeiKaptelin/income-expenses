import {connect} from "react-redux";

import Transactions from "../components/Transactions";
import {addTransactionSubmit} from "../../../actions/TransactionActions";

export default connect((state) => {
  return {
    walletBalance: state.walletStats.walletBalance,
    totalChange: state.walletStats.totalChange,
    expense: state.walletStats.expense,
    income: state.walletStats.income,
  };
}, {
  addTransactionSubmit,
})(Transactions);

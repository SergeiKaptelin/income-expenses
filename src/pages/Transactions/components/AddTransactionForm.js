import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";

import Button from "../../../components/Button/Button";
import TextInput from "../../../components/Fields/TextInput";

import styles from "./AddTransactionForm.scss";

class AddTransactionForm extends PureComponent {
  render() {
    const {submitting, handleSubmit, addTransactionSubmit, pristine} = this.props;
    return (
      <form
        onSubmit={handleSubmit(addTransactionSubmit)}
      >
        <div className={styles.Fields}>
          <Field
            autoComplete="price"
            component={TextInput}
            label="Сумма"
            name="price"
          />
        </div>
        <div className={styles.Controls}>
          <span>Не закрывайте, чтобы добавить больше операций</span>
          <Button
            disabled={pristine || submitting}
            type="submit"
          >
            Добавить транзакцию
          </Button>
        </div>
      </form>
    );
  }
}

AddTransactionForm.propTypes = {
  addTransactionSubmit: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

AddTransactionForm.defaultProps = {
  addTransactionSubmit: () => false,
};

export default reduxForm({
  form: "addTransactionForm",
})(AddTransactionForm);

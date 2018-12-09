const initialState = {
  walletBalance: 28790.00,
  totalChange: 0.00,
  expense: 0.00,
  income: 0.00,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

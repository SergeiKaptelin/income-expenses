const addTransactionSubmit = () => async (dispatch, getState) => {
  const state = getState();
  console.log("state", state);
};

export {
  addTransactionSubmit,
};

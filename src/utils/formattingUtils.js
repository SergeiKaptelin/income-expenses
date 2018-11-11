import numeral from "numeral";

export const toPrice = (value) => numeral(value).format("0,0.00");

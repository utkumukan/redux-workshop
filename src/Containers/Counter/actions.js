import * as constants from "./constants";

export function increment(count) {
  debugger;
  return {
    type: constants.INCREMENT,
    payload: count
  };
}

export function decrement(count) {
  debugger;
  return {
    type: constants.DECREMENT,
    payload: count
  };
}

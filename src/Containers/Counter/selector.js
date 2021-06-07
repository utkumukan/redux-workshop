import { createSelector } from "reselect";

import { initialState } from "./reducer";

const selectCount = (state) => state || initialState;

const makeSelectCount = () =>
  createSelector(selectCount, (state) => state.count);

export { makeSelectCount };

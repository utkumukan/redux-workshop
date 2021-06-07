import produce from "immer";
import * as constants from "./constants";

export const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    debugger;
    switch (action.type) {
      case constants.INCREMENT: {
        draft.count = action.payload;
        break;
      }
      case constants.DECREMENT: {
        draft.count = action.payload;
        break;
      }
      default: {
        break;
      }
    }
  });

export default countReducer;

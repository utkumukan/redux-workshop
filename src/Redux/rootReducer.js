/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import history from "./history";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: null,
    theme: null,
    language: null,
    router: connectRouter(history),
    ...injectedReducers
  });

  return rootReducer;
}

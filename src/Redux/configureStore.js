/**
 * Create the store with dynamic reducers
 */

import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";
//import createSagaMiddleware from "redux-saga";

import createReducer from "./rootReducer";

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;

  const middlewares = [routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
}

/*export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;

  const sagaMiddleware = createSagaMiddleware();

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;

  return store;
}*/

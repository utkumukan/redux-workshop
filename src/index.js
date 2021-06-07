import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
/*import configureStore from "./Redux/configureStore";
import history from "./Redux/history";*/
import countReducer from "./Containers/Counter/reducer";

/*const initialState = {};
const store = configureStore(initialState, history);*/

const store = createStore(countReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

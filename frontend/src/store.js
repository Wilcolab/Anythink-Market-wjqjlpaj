import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";
import reducer from "./reducer";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const getMiddleware = () => {
  return applyMiddleware(
    promiseMiddleware,
    localStorageMiddleware
  );
};

const composeEnhancers = 
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducer, composeEnhancers(getMiddleware()));

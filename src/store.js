// Default Imports
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import freeze from "redux-freeze";
import logger from "redux-logger";

// Custom Imports
import RootReducer from "./reducers";

const middlewares = [thunk];
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

// Check for if running in production or not, and loads redux dev tools
if (process.env.NODE_ENV !== "production") {
  middlewares.push(freeze);
  middlewares.push(logger);
}

let appliedMiddlewares = applyMiddleware(...middlewares);

if (
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  appliedMiddlewares = composeEnhancers(appliedMiddlewares);
}

export default createStore(RootReducer, appliedMiddlewares);

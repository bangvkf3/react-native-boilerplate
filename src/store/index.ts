import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "./logger";
import rootReducer from "./rootReducer";

let middlewares: any[] = [thunk];
if (__DEV__) {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

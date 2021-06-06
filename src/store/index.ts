import { applyMiddleware, createStore } from "redux";
import { logger } from "./logger";
import rootReducer from "./rootReducer";

let middlewares: any[] = [];
if (__DEV__) {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

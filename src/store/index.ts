import { createStore } from "redux";
import rootReducer from "./rootReducer";
export * from "./RootState";

export const store = createStore(rootReducer);

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;
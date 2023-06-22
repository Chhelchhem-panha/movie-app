import thunk from "redux-thunk"
import { applyMiddleware, compose, legacy_createStore } from "redux";
import { rootReducer } from './../reducers/rootReducer';

const middleware = [thunk]
export const centralStore = legacy_createStore(rootReducer, compose(applyMiddleware(...middleware)))
import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./Products/reducer";

export const store = legacy_createStore(productReducer, applyMiddleware(thunk));

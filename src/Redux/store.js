import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./Products/reducer";
import { cartReducer } from "./Cart/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

import { legacy_createStore } from "redux";
import { productReducer } from "./Products/reducer";

export const store = legacy_createStore(productReducer);

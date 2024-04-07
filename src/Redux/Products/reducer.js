import { IS_ERROR, IS_LOADING, STORE_DATA } from "./actiontypes";

const initialState = {
  loading: false,
  error: false,
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case STORE_DATA: {
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
    }
    default: {
      return state;
    }
  }
};

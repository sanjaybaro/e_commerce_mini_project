import {
  CURRENT_PRODUCT_ERROR,
  CURRENT_PRODUCT_LOADING,
  CURRENT_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from "./actiontypes";

const initialState = {
  loading: false,
  error: false,
  products: [],
  currentProduct: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
    }
    case CURRENT_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case CURRENT_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case CURRENT_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        currentProduct: payload,
      };
    }
    default: {
      return state;
    }
  }
};

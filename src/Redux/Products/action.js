import {
  CURRENT_PRODUCT_ERROR,
  CURRENT_PRODUCT_LOADING,
  CURRENT_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
} from "./actiontypes";

const handleLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};

const handleError = () => {
  return {
    type: PRODUCT_ERROR,
  };
};

const handleSuccess = (payload) => {
  return {
    type: PRODUCT_SUCCESS,
    payload,
  };
};

const getData = () => (dispatch) => {
  dispatch(handleLoading());
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://e-com-json-api-mock.onrender.com/products"
      );
      const data = await response.json();
      dispatch(handleSuccess(data));
      // console.log(data);
    } catch (err) {
      console.log(err.message);
      dispatch(handleError());
    }
  };

  fetchData();
};

//for singleproduct/currentproduct

const handleCurrentPorductLoading = () => {
  return {
    type: CURRENT_PRODUCT_LOADING,
  };
};

const handleCurrentProductError = () => {
  return {
    type: CURRENT_PRODUCT_ERROR,
  };
};

const handleCurrentProductSuccess = (payload) => {
  return { type: CURRENT_PRODUCT_SUCCESS, payload };
};

const getCurrentProductData = (id) => (dispatch) => {
  dispatch(handleCurrentPorductLoading());
  const fetchSingleData = async () => {
    try {
      const response = await fetch(
        `https://e-com-json-api-mock.onrender.com/products/${id}`
      );
      const data = await response.json();
      dispatch(handleCurrentProductSuccess(data));
      // console.log(data);
    } catch (err) {
      console.log(err.message);
      dispatch(handleCurrentProductError());
    }
  };

  fetchSingleData();
};

export { getData, getCurrentProductData };

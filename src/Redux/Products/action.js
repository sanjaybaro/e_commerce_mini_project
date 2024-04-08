import { IS_ERROR, IS_LOADING, STORE_DATA } from "./actiontypes";

const handleLoading = () => {
  return {
    type: IS_LOADING,
  };
};

const handleError = () => {
  return {
    type: IS_ERROR,
  };
};

const storeData = (payload) => {
  return {
    type: STORE_DATA,
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
      dispatch(storeData(data));
      // console.log(data);
    } catch (err) {
      console.log(err.message);
      dispatch(handleError());
    }
  };

  fetchData();
};

export { storeData, handleLoading, handleError, getData };

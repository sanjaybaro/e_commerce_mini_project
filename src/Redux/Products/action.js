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
export { storeData, handleLoading, handleError };

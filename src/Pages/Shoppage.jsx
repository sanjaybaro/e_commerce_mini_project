import React from "react";
import { useEffect } from "react";
import {
  handleLoading,
  handleError,
  storeData,
} from "../Redux/Products/action";
import { useDispatch } from "react-redux";

function Shoppage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLoading());
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://e-com-json-api-mock.onrender.com/products"
        );
        const data = await response.json();
        dispatch(storeData(data));
        console.log(data);
      } catch (err) {
        console.log(err.message);
        dispatch(handleError());
      }
    };

    fetchData();
  }, []);

  return <div>Shoppage</div>;
}

export default Shoppage;

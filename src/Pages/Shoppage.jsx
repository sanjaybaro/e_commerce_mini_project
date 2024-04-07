import React from "react";
import { useEffect } from "react";
import {
  handleLoading,
  handleError,
  storeData,
  getData,
} from "../Redux/Products/action";
import { useDispatch } from "react-redux";

function Shoppage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return <div>Shoppage</div>;
}

export default Shoppage;

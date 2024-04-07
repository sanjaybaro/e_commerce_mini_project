import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const productData = useSelector((store) => store.products);
  console.log(productData);
  return <div>Home</div>;
}

export default Home;

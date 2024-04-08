import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shoppage from "../Pages/Shoppage";
import SingleProductPage from "../Pages/SingleProductPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections/all" element={<Shoppage />} />
      <Route path="/collections/all/:id" element={<SingleProductPage />} />
      <Route />
    </Routes>
  );
}

export default AllRoutes;

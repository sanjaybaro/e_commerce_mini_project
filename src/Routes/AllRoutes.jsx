import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shoppage from "../Pages/Shoppage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections/all" element={<Shoppage/>}/>
      <Route />
      <Route />
    </Routes>
  );
}

export default AllRoutes;

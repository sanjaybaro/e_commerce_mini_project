import React from "react";
import { useEffect } from "react";
import { getData } from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { DNA } from "react-loader-spinner";

function Shoppage() {
  const loading = useSelector((store) => store.loading);
  const products = useSelector((store) => store.products);
  const error = useSelector((store) => store.error);
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);

  return (
    <div>
      <Text>Shop All</Text>
      <Filter />
      {loading ? (
        <DNA
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />
      ) : error ? (
        <h1>Something went wrong, please try again later </h1>
      ) : (
        <Grid templateColumns="repeat(3,1fr)" gap={6}>
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Grid>
      )}
    </div>
  );
}

export default Shoppage;

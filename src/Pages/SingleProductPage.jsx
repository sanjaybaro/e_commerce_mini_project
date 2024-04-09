import React, { useEffect, useState } from "react";
import { getCurrentProductData } from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { DNA } from "react-loader-spinner";
import ProductCard from "../Components/ProductCard";
import { addToCart } from "../Redux/Cart/action";

function SingleProductPage() {
  const loading = useSelector((store) => store.product.loading);
  const currentProduct = useSelector((store) => store.product.currentProduct);
  const error = useSelector((store) => store.product.error);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getCurrentProductData(id));
    }
  }, [dispatch, id]);

  const handleCart = () => {
    let payload = {
      ...currentProduct,
      selectedSize,
    };
    // console.log(payload);
    dispatch(addToCart(payload));
  };

  if (loading) {
    return (
      <DNA
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }
  if (Object.keys(currentProduct).length === 0) {
    return <h1>Product {id} Not Found!</h1>;
  }

  return (
    <Flex justifyContent="center" align="center">
      <ProductCard product={currentProduct} />
      <Box>
        <Text as="em">Choose a size</Text>
        <HStack p={4}>
          {currentProduct?.sizes.map((size) => (
            <Button
              onClick={() => setSelectedSize(size)}
              key={size}
              bg={selectedSize === size ? "green" : "beige"}
              color={selectedSize === size ? "white" : "black"}
            >
              {size}
            </Button>
          ))}
        </HStack>
        <Button
          m={4}
          p={5}
          isDisabled={!selectedSize}
          bg="cyan"
          onClick={handleCart}
        >
          {!selectedSize ? "PLEASE SELECT A SIZE" : "ADD TO CART"}
        </Button>
      </Box>
    </Flex>
  );
}

export default SingleProductPage;

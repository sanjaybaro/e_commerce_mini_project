import React, { useState } from "react";
import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { id, name, color, gender, original_price, final_price, images } =
    product;

  const [img, setImg] = useState(images[0]);
  const navigate = useNavigate();
  const showOtherImage = () => {
    setImg(images[1]);
  };
  const showOriginalimage = () => {
    setImg(images[0]);
  };

  return (
    <Box
      onClick={() => navigate(`/collections/all/${id}`)}
      onMouseEnter={showOtherImage}
      onMouseLeave={showOriginalimage}
    >
      <Image src={img} alt={name + "shoe"} />
      <Text>{name + " | " + color + " | " + gender}</Text>
      <HStack justifyContent={"center"}>
        <Text color={"red"}>Rs. {final_price}</Text>
        <Text color={"gray"} as={"s"}>
          {original_price}
        </Text>
      </HStack>
    </Box>
  );
}

export default ProductCard;

import { Flex, Spacer, Image, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsSearch, BsBasket3 } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((store) => store.cart.cart);
  console.log(cart);
  console.log(cart.length);
  // const cartlength = (cart) => {
  //   if (cart) {
  //     return cart.length;
  //   } else {
  //     return 0;
  //   }
  // };
  return (
    <Flex
      bg={"tomato"}
      borderBottom="0.5px solid gray"
      p={1}
      align={"center"}
      justify="center"
    >
      <Spacer />
      <Link to={"/"}>
        <Image
          src="https://www.flatheads.in/cdn/shop/files/Logo_Horizontal.png?v=1698929502&width=170"
          alt="studs"
          m={5}
          fit="contain"
        />
      </Link>
      <Spacer />
      <Link to={"/collections/all"}>
        <Text px={4} py={2}>
          SHOP
        </Text>
      </Link>
      <Link to={"/collections/all"}>
        <Text px={4} py={2}>
          WOMEN
        </Text>
      </Link>
      <Link to={"/collections/all"}>
        <Text px={4} py={2}>
          WOMEN
        </Text>
      </Link>
      <Link to={"/collections/all"}>
        <Text px={4} py={2}>
          MEN
        </Text>
      </Link>
      <Link to={"/collections/all"}>
        <Text px={4} py={2}>
          MEN ARRIVALS
        </Text>
      </Link>
      <Link to={"/collections/all"}>
        <Text px={4} py={2}>
          ABOUT
        </Text>
      </Link>
      <Link to={"/collections/all"}>
        <Text px={4} py={2}>
          HELP
        </Text>
      </Link>
      <Spacer />
      <Icon as={BsSearch} boxSize="20px" mx={6} />
      <Icon as={RiUserLine} boxSize="20px" mx={6} />
      <Icon as={BsBasket3} boxSize="20px" mx={6} />
      <Text>{cart ? cart.length : 0}</Text>
      <Spacer />
    </Flex>
  );
};

export { Navbar };

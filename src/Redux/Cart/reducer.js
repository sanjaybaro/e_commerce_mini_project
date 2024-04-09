import { ADD_TO_CART } from "./actionTypes";

const initState = {
  cart: [],
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      //lets check in the cart if the same product is present or not.
      const isPresent = state.cart.find((prod) => {
        return prod.id === payload.id && prod.selectedSize === payload.selectedSize;
      });
      let newCart;
      // if present- we will increase the quantity
      if (isPresent) {
        newCart = state.cart.map((prod) => {
          if (prod.id === payload.id && prod.selectedSize === payload.selectedSize) {
            return { ...prod, qty: prod.qty + 1 };
          } else {
            return prod;
          }
        });
      }
      // else-if prod not present in the cart and  we are adding the product for the first time to the cart.
      else {
        let newPayload = {
          ...payload,
          qty: 1,
        };
        newCart = [...state.cart, newPayload];
      }

      return { ...state, cart: newCart };
    }
    default: {
      return state;
    }
  }
};

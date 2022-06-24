import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

const CartItem = {
  id: "",
  quantity: "",
};

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function Context({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function getItemQuantity(id) {
    return CartItem.find((item) => item.id === id)?.quantity || 0;
  }
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default {
  useShoppingCart,
  Context,
};

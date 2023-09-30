import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState({});

  return (
    <CartContext.Provider value={{productsInCart, setProductsInCart}}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.object,
};

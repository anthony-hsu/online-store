import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const ProductsContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const data = await response.json();
    setProducts(data);
  };

  const getProductById = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }

  return (
    <ProductsContext.Provider value={{ products, getProducts, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.object,
};

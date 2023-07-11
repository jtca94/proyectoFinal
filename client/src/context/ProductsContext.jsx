import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }; 

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

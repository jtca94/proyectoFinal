import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedProducts, setSortedProducts] = useState(products);

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
      if (!res.ok) {
        throw new Error("Error al obtener los productos");
      }
      const data = await res.json();
      setProducts(data.products);
      setSortedProducts(data.products);
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <ProductsContext.Provider value={{products, getProducts, setProducts, filteredProducts, setFilteredProducts, loading, sortedProducts, setSortedProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

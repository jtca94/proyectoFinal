import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

export const UserProductsContext = createContext();

export const UserProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_API_URL}/productByUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <UserProductsContext.Provider value={{products}}>
      {children}
    </UserProductsContext.Provider>
  );
};

UserProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

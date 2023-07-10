import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

export const UserProductsContext = createContext();

export const UserProductsProvider = ({children}) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${import.meta.env.VITE_API_URL}/productsByUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setProducts(data.userProducts);
    } catch (error) {
      console.log(error);
    }
  }; 

  return (
    <UserProductsContext.Provider value={{products}}>
      {children}
    </UserProductsContext.Provider>
  );
};

UserProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

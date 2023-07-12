// React
import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export default function UserContextProvider({children}) {
  {
    /* Estado global Cart */
  }
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider value={{cart, setCart}}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
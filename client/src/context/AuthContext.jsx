import {createContext} from "react";
import {useState} from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();
const initialToken = localStorage.getItem("token") || null;
const initialUser = localStorage.getItem("user") || null;

export const AuthProvider = ({children}) => {
const [token, setToken] = useState(initialToken);
const [user, setUser] = useState(initialUser);

const login = (token, user) => {
  setToken(token);
  setUser(user);
};

  return <AuthContext.Provider value={{login, token, user}}>
    {children}
    </AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

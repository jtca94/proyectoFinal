import {createContext} from "react";
import {useState} from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();
const initialToken = localStorage.getItem("token") || null;
const initialUser = localStorage.getItem("user") || null;
const initialUserName = localStorage.getItem("userName") || null;

export const AuthProvider = ({children}) => {
const [token, setToken] = useState(initialToken);
const [user, setUser] = useState(initialUser);
const [userName, setUserName] = useState(initialUserName);

const login = (token, user, userName) => {
  setToken(token);
  setUser(user);
  setUserName(userName);
};
const logout = () => {
  setToken(null);
  setUser(null);
  setUserName(null);
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userName");
};

  return <AuthContext.Provider value={{login, logout, token, user, userName}}>
    {children}
    </AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

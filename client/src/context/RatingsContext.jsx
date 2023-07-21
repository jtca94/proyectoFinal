import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const RatingsContext = createContext();

export const RatingsProvider = ({children}) => {
  const [ratings, setRatings] = useState([]);
  return (
    <RatingsContext.Provider value={{ratings, setRatings}}>
      {children}
    </RatingsContext.Provider>
  );
};

RatingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

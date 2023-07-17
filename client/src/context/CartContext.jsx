// React
import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export default function CartContextProvider({children}) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getCartCount = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.quantity;
      }, 0);
      setCartCount(res);
    };
    getCartCount();
  }, [cart]);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const handleAddToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      const newCart = cart.map((item) =>
        item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item
      );
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [...cart, {...product, quantity: 1}];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleRemoveFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = cart.map((item) =>
        item.id === product.id ? {...exist, quantity: exist.quantity - 1} : item
      );
      setCart(newCart);
    }
  };

  const handleClearItem = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart");
    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{cart, handleAddToCart, handleRemoveFromCart, handleClearItem, total, cartCount}}
    >
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

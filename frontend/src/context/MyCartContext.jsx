import React, { useContext, useState } from "react";
import { createContext } from "react";

const MyCartContext = createContext();

const MyCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <MyCartContext.Provider
      value={{ addToCart, removeFromCart, cart, clearCart }}
    >
      {children}
    </MyCartContext.Provider>
  );
};

const useCart = () => {
  return useContext(MyCartContext);
};

export { useCart, MyCartProvider, MyCartContext }

// CartProvider.js
import React, { useState } from 'react';
import CartContext from './context';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productID , qty) => {
    const storedCartItems = localStorage.getItem('cartItems');
    let updatedItems = [];

    if (storedCartItems) {
      const cartItems = JSON.parse(storedCartItems);
      const existingItem = cartItems.find((item) => item.product_id === productID);

      if (existingItem) {
        updatedItems = cartItems.map((item) =>
          item.product_id === productID
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        updatedItems = [...cartItems, { product_id: productID, qty: qty }];
      }
    } else {
      updatedItems = [{ product_id: productID, qty: qty }];
    }

    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };


  const removeFromCart = (item) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem !== item)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

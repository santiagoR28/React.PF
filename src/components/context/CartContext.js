import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState({ qty: 0, total: 0 });

  const addItem = (product, pedido) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((e) => {
          if (e.id === product.id)
            return {
              ...e,
              pedido: e.pedido + pedido,
            };
          return e;
        })
      );
    } else {
      setCart([...cart, { ...product, pedido }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  useEffect(() => {
    let qtyTotal = 0;
    let total = 0;

    cart.forEach((e) => {
      qtyTotal += e.pedido;
      total += e.pedido * e.price;
    });
    setTotal({ qty: qtyTotal, total: total.toFixed(2) });
  }, [cart]);

  return (
    <>
      <CartContext.Provider value={{ cart, addItem, removeItem, clear, total }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

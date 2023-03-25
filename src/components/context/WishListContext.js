import React, { createContext, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [Wishlist, setWishlist] = useState([]);

  const addItemtoWL = (product) => {
    setWishlist([...Wishlist, { ...product }]);
  };

  const removeItemFromWL = (e) => {
    setWishlist(Wishlist.filter((prod) => prod.id !== e.id));
  };

  const clearList = () => {
    setWishlist([]);
  };

  const isInList = (id) => {
    return Wishlist.some((prod) => prod.id === id);
  };

  return (
    <>
      <WishListContext.Provider
        value={{ Wishlist, addItemtoWL, removeItemFromWL, isInList, clearList }}
      >
        {children}
      </WishListContext.Provider>
    </>
  );
};

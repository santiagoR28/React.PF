import React, { createContext, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [Wishlist, setWishlist] = useState([]);

  const addItemtoWL = (product) => {
    if (isInList(product.id)) {
      setWishlist(
        Wishlist.map((e) => {
          if (e.id === product.id) console.log("ya existe en lista");
          return e;
        })
      );
    } else {
      console.log("sumar");
      setWishlist([...Wishlist, { ...product }]);
    }
  };

  const removeItemFromWL = (e) => {
    console.log(e);
    setWishlist(Wishlist.filter((prod) => prod.id !== e));
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

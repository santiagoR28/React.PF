import React, { useContext } from "react";
import { WishListContext } from "../context/WishListContext";
import { Link } from "react-router-dom";

import "../css/Cart.css";

const WishList = () => {
  const { removeItemFromWL, Wishlist, clearList } = useContext(WishListContext);

  return (
    <>
      {!Wishlist.length ? (
        <>
          <h1>No tienes ningun producto agregado a tu lista</h1>
          <Link to={"/"}>
            <button>Ver productos</button>
          </Link>
        </>
      ) : (
        <>
          <div className="flx">
            {Wishlist.map((product) => {
              return (
                <div key={product.id} className="hjo">
                  <img className="image" src={product.image} />
                  <div>
                    <h1>{product.title}</h1>
                    <button className="btn" onClick={removeItemFromWL}>
                      Eliminar de la lista
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="UI">
            <button className="btn" onClick={clearList}>
              Vaciar lista
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default WishList;

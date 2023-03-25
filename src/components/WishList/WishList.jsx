import React, { useContext } from "react";
import { WishListContext } from "../context/WishListContext";
import { Link } from "react-router-dom";
import "../css/Item.css";
import "../css/Wishlist.css";

const WishList = () => {
  const { removeItemFromWL, Wishlist, clearList } = useContext(WishListContext);

  return (
    <>
      {!Wishlist.length ? (
        <div className="empty">
          <h1>No tienes ningun producto agregado a tu lista</h1>
          <Link to={"/"}>
            <button className="btn-clear-prod">ver productos</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="Flex-product">
            {Wishlist.map((product) => {
              return (
                <div key={product.id} className="hijo">
                  <img className="img" src={product.image} />
                  <h3 className="title">{product.title}</h3>
                  <div className="botonera">
                    <button
                      className="btn-item-WL "
                      onClick={() => {
                        removeItemFromWL(product);
                      }}
                    >
                      Eliminar de la lista
                    </button>
                    <Link to={`/item/${product.id}`}>
                      <button className="btn-item-WL">ver producto</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="UI">
            <button className="btn-clear-prod" onClick={clearList}>
              Vaciar lista
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default WishList;

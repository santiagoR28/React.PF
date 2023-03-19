import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);

  return (
    <>
      {!cart.length ? (
        <>
          <h1>No tienes ningun producto agregado</h1>
          <Link to={"/"}>
            <button>ver productos</button>
          </Link>
        </>
      ) : (
        <>
          <div className="flx">
            {console.log(total)}
            {cart.map((addedProd) => {
              return (
                <div key={addedProd.id} className="hjo">
                  <img className="image" src={addedProd.image} />
                  <div>
                    <h1>{addedProd.title}</h1>
                    <h2>cantidad: {addedProd.pedido} </h2>
                    <h2>precio: {addedProd.price} </h2>
                    <button
                      className="btn"
                      onClick={() => {
                        removeItem(addedProd.id);
                      }}
                    >
                      Eliminar este producto
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="UI">
            <h2>total: {total.total} </h2>
            <button className="btn" onClick={clear}>
              vaciar carrito
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

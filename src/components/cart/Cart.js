import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Sells from "../sell/Sells";
import { CartContext } from "../context/CartContext";
import "../css/Cart.css";
import "../css/Item.css";
import "../css/Wishlist.css";

const Cart = () => {
  const [change, setChange] = useState(false);
  const { cart, removeItem, clear, total } = useContext(CartContext);

  return (
    <>
      {change ? (
        <Sells />
      ) : !cart.length ? (
        <div className="empty">
          <h1>No tienes ningun producto agregado</h1>
          <Link to={"/"}>
            <button className="btn-clear-prod">ver productos</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="Flex-product">
            {cart.map((addedProd) => {
              return (
                <div key={addedProd.id} className="hijo">
                  <img className="img" src={addedProd.image} />
                  <div>
                    <h3>{addedProd.title}</h3>
                    <h3>cantidad: {addedProd.pedido} </h3>
                    <h3>precio: ${addedProd.price} </h3>
                    <button
                      className="btn-item-cart"
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
            <h2>total: ${total.total} </h2>
            <button className="btn-clear-prod" onClick={clear}>
              vaciar carrito
            </button>
            <button
              className="btn-pago"
              onClick={() => {
                setChange(true);
              }}
            >
              Continuar con el pago
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

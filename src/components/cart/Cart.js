import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/Firebase";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import "../css/Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);

  const buyer = {
    name: "Pedro",
    lastname: "Gomez",
    email: "pedrogomez@gmail.com",
  };

  const clickSell = () => {
    const sellCollection = collection(db, "sells");
    addDoc(sellCollection, {
      buyer,
      items: cart,
      total: total.total,
      time: serverTimestamp(),
    }).then((promise) => {
      console.log(promise.id);
    });
  };

  const stockUpdate = () => {
    cart.forEach((result) => {
      const docRef = doc(db, "products", result.id);
      updateDoc(docRef, { stock: result.stock - result.pedido });
    });
  };

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
                    <h2>precio: ${addedProd.price} </h2>
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
            <h2>total: ${total.total} </h2>
            <button className="btn" onClick={clear}>
              vaciar carrito
            </button>
            <button onClick={stockUpdate}>Continuar con el pago</button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

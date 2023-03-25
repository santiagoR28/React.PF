import React, { useContext, useState } from "react";
import "../css/Sell.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/Firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

const Sells = () => {
  const { cart, clear, total } = useContext(CartContext);
  const [changeUI, setChangeUI] = useState(false);
  const [id, setId] = useState("");
  const [buyer, setBuyer] = useState({});

  const clickSell = (e) => {
    e.preventDefault();
    setChangeUI(true);

    const sellCollection = collection(db, "sells");
    addDoc(sellCollection, {
      buyer,
      items: cart,
      total: total.total,
      time: serverTimestamp(),
    }).then((promise) => {
      setId(promise.id);
    });

    cart.forEach((result) => {
      const docRef = doc(db, "products", result.id);
      updateDoc(docRef, { stock: result.stock - result.pedido });
    });
    clear();
  };

  return (
    <>
      {changeUI ? (
        <div className="form">
          <h1>Gracias por su compra sr/sra.{buyer.name}! </h1>
          <h2>ID de la compra (no olvides guardarlo): {id} </h2>
          <p>(con el podés consultar el estado de tu compra)</p>
          <Link to={"/"}>
            <button className="btn-finish">volver al menu principal</button>
          </Link>
        </div>
      ) : (
        <div>
          <form className="form" action="#">
            <h3>Ingrese su nombre</h3>
            <input
              className="input"
              type="text"
              placeholder="name"
              required
              onBlur={(e) => {
                setBuyer({ ...buyer, name: e.target.value });
              }}
            />

            <h3>Ingrese su apellido</h3>
            <input
              className="input"
              type="text"
              placeholder="lastname"
              required
              onBlur={(e) => {
                setBuyer({ ...buyer, apellido: e.target.value });
              }}
            />

            <h3>Ingrese su correo</h3>
            <input
              className="input"
              type="email"
              placeholder="mail"
              required
              onBlur={(e) => {
                setBuyer({ ...buyer, mail: e.target.value });
              }}
            />

            <h3>Ingrese su documento de identidad (sin espacios)</h3>
            <input
              className="input"
              type="number"
              placeholder="document"
              maxLength={8}
              minLength={8}
              required
              onBlur={(e) => {
                setBuyer({ ...buyer, document: e.target.value });
              }}
            />

            <h3>Ingrese el numero de su tarjeta (sin espacios)</h3>
            <input
              className="input"
              type="number"
              maxLength={16}
              minLength={16}
              placeholder="xxxx-xxxx-xxxx"
              min={1}
              required
              onBlur={(e) => {
                setBuyer({ ...buyer, cardNumber: e.target.value });
              }}
            />

            <h3>Ingrese los tres digitos de la parte de atras</h3>
            <input
              className="input"
              type="number"
              placeholder="xxx"
              maxLength={3}
              minLength={3}
              min={1}
              required
              onBlur={(e) => {
                setBuyer({ ...buyer, threeDigits: e.target.value });
              }}
            />
            <button className="btn-finish" onClick={clickSell}>
              Finalizar compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default Sells;

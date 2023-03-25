import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/Firebase";
import "../css/Sell.css";
import { collection, getDoc, doc } from "firebase/firestore";

const SellConsult = () => {
  const [changeUI, setChangeUI] = useState(false);
  const [id, setId] = useState("");
  const [prod, setProd] = useState({});
  const [idExist, setIdExist] = useState(false);

  const comparar = () => {
    const sellCollection = collection(db, "sells");
    const refDoc = doc(sellCollection, id);
    getDoc(refDoc).then((data) => {
      if (!data.data()) {
        setIdExist(true);
      } else {
        setProd({ ...data.data() });
        setChangeUI(true);
      }
    });
  };

  return (
    <>
      {changeUI ? (
        <div className="IdExist">
          <h1 className="font">Su compra:</h1>
          {prod.items.map((buys) => {
            return (
              <div key={buys.id} className="hjo">
                <h4> {buys.title} </h4>
                <h4>Cantidad: {buys.pedido} </h4>
              </div>
            );
          })}
          <h2 className="font">Total de la compra: ${prod.total} </h2>
          <h1 className="font">Estado de la compra: En proceso de envio</h1>
          <Link to={"/"}>
            <button className="btn-finish">Volver a la home</button>
          </Link>
        </div>
      ) : (
        <div className="id">
          <h3>Ingrese el ID de su compra </h3>
          <div>
            <input
              className="inputId"
              type="text"
              placeholder="id"
              onBlur={(e) => {
                setId(e.target.value);
              }}
            />
            <button className="btn-id" onClick={comparar}>
              buscar
            </button>
          </div>
          {idExist && <h4>El id ingresado no es valido</h4>}
          <Link to={"/"}>
            <button className="btn-finish">Volver a la home</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default SellConsult;

import { useState } from "react";
import "../css/ItemDetail.css";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ onAdd, stock }) => {
  const [pedido, setPedido] = useState(0);

  const suma = () => {
    setPedido(pedido + 1);
  };

  const resta = () => {
    setPedido(pedido - 1);
  };

  return (
    <>
      <div className="ItemCount">
        {pedido < stock ? (
          <button className="suma" onClick={suma}>
            +
          </button>
        ) : (
          <div />
        )}
        <h3> {pedido} </h3>
        {pedido > 0 ? (
          <button className="suma resta" onClick={resta}>
            -
          </button>
        ) : (
          <div />
        )}
      </div>
      <h4> stock: {stock} </h4>
      {pedido === 0 ? (
        <h3>seleccione una cantidad</h3>
      ) : (
        <button
          onClick={() => {
            onAdd(pedido);
          }}
        >
          agregar al carrito
        </button>
      )}
    </>
  );
};

export default ItemCount;

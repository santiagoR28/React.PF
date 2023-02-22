import { useState } from "react";
import "../css/ItemDetail.css";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ onAdd, stock }) => {
  const [pedido, setPedido] = useState(0);

  const suma = () => {
    setPedido(pedido + 1);
  };

  const resta = () => {
    setPedido(pedido - 1);
  };

  // const toastify = () => {
  //   toast.error("por el momento no tenemos mas stock", {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  //   return <div />;
  // };

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
      <button
        onClick={() => {
          onAdd(pedido);
        }}
      >
        agregar al carrito
      </button>
      {/* <ToastContainer /> */}
    </>
  );
};

export default ItemCount;

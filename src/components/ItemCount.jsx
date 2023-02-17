import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCount = ({ onAdd }) => {
  const [pedido, setPedido] = useState(0);
  const [stock, setStock] = useState(5);

  const suma = () => {
    setPedido(pedido + 1);
    setStock(stock - 1);
  };

  const resta = () => {
    setPedido(pedido - 1);
    setStock(stock + 1);
  };

  const toastify = () => {
    toast.error("  por el momento no tenemos mas stock", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div>
        {pedido < 5 ? <button onClick={suma}>+</button> : toastify()}
        <h3> {pedido} </h3>
        {pedido > 0 ? <button onClick={resta}>-</button> : null}
      </div>
      <div> stock: {stock} </div>
      <button
      // onClick={() => {
      //   onAdd(pedido);
      // }}
      >
        agregar
      </button>

      <ToastContainer />
    </>
  );
};

export default ItemCount;

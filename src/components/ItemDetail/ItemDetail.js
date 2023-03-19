import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const [UIchange, setUIchange] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (pedido) => {
    setUIchange(true);
    addItem(product, pedido);
  };

  return (
    <>
      <div className="Flex">
        <img className="img" src={product.image} />
        <div className="Hijo">
          <h2> {product.title} </h2>
          <h3> {product.description}</h3>
          <h3> {product.price}$</h3>
          {UIchange ? (
            <Link to={"/cart"}>
              <button> Finalizar Compra </button>
            </Link>
          ) : (
            <ItemCount onAdd={onAdd} stock={product.stock} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

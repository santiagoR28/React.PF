import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";

const ItemDetail = ({ product }) => {
  const onAdd = (pedido) => {
    console.log(pedido);
  };

  return (
    <>
      {console.log(product)}
      <div className="Flex">
        <img className="img" src={product.image} />
        <div className="Hijo">
          <h2> {product.title} </h2>
          <h3> {product.description}</h3>
          <h3> {product.price}$</h3>
          <ItemCount onAdd={onAdd} stock={product.stock} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

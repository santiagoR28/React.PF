import Item from "./Item";
import "../css/Item.css";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="Flex-product">
        {products.map((prod) => {
          return <Item key={prod.id} prod={prod} />;
        })}
      </div>
    </>
  );
};

export default ItemList;

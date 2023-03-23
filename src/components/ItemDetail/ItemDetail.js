import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishListContext } from "../context/WishListContext";

const ItemDetail = ({ product }) => {
  const [UIchange, setUIchange] = useState(false);
  const { addItem } = useContext(CartContext);
  const { addItemtoWL, removeItemFromWL, isInList, Wishlist } =
    useContext(WishListContext);

  const onAdd = (pedido) => {
    setUIchange(true);
    addItem(product, pedido);
  };

  const onAddWishList = () => {
    addItemtoWL(product);
  };

  const removeWishList = () => {
    removeItemFromWL(product);
  };

  const HeartIcon = () => {
    return (
      <>
        {isInList(product.id) ? (
          <FavoriteIcon onClick={removeWishList} />
        ) : (
          <FavoriteBorderIcon onClick={onAddWishList} />
        )}
      </>
    );
  };
  return (
    <>
      <div className="Flex">
        <img className="img" src={product.image} />
        <div className="Hijo">
          <h2> {product.title} </h2>
          <h3> {product.description}</h3>
          <h3> {product.price}$</h3>
          <HeartIcon />
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

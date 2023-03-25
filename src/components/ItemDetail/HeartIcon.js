import React, { useContext } from "react";
import "../css/ItemDetail.css";
import { WishListContext } from "../context/WishListContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const HeartIcon = ({ product }) => {
  const { addItemtoWL, removeItemFromWL, isInList, Wishlist } =
    useContext(WishListContext);

  const onAddWishList = () => {
    addItemtoWL(product);
  };

  const removeWishList = () => {
    removeItemFromWL(product);
  };

  return (
    <div className="heartIcon">
      {isInList(product.id) ? (
        <FavoriteIcon onClick={removeWishList} />
      ) : (
        <FavoriteBorderIcon onClick={onAddWishList} />
      )}
    </div>
  );
};

export default HeartIcon;

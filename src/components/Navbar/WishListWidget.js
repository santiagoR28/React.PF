import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/NavBar.css";
// import { CartContext } from "../context/CartContext";

function WishListWidget() {
  //   const { total } = useContext(CartContext);

  return (
    <>
      <button className="button">
        <FavoriteIcon fontSize="large" />
        {/* {total.qty === 0 ? null : <h2> {total.qty} </h2>} */}
      </button>
    </>
  );
}

export default WishListWidget;

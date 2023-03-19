import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../css/NavBar.css";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { total } = useContext(CartContext);

  return (
    <>
      <button className="button">
        <ShoppingCartIcon fontSize="large" />
        {total.qty === 0 ? null : <h2> {total.qty} </h2>}
      </button>
    </>
  );
}

export default CartWidget;

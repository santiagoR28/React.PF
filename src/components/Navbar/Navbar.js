import CartWidget from "./CartWidget";
import WishListWidget from "./WishListWidget";
import Categories from "./Categories";
import "../css/NavBar.css";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <Link to={"/"} className="h1">
          InstaClothes
        </Link>
        <ul className="ul">
          <Categories />
          <Link to={"/sellconsult"} className="purchase">
            Consultar Compra
          </Link>
        </ul>
        <Link to={"/wishlist"}>
          <WishListWidget />
        </Link>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
    </>
  );
}

export default Navbar;

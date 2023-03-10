import CartWidget from "./CartWidget";
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
        </ul>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import WishList from "./components/WishList/WishList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";
import { WishListProvider } from "./components/context/WishListContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categories/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

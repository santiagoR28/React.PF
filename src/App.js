import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categories/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

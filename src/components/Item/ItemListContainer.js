import { useState, useEffect } from "react";
import ItemList from "./ItemList";

// const onAdd = (count) => {
//    console.log("el usuario quiere agregar " + count + " galletas");
//  onAdd={onAdd}
//  };

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const prod = async () => {
      try {
        const AsAw = await fetch("https://fakestoreapi.com/products");
        const res = await AsAw.json();
        setProducts(res);
      } catch {}
    };
    prod();
  }, []);

  return (
    <>
      {console.log(products)}
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;

import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const URL = id
    ? `https://fakestoreapi.com/products/category/${id}`
    : "https://fakestoreapi.com/products";

  useEffect(() => {
    const prod = async () => {
      try {
        const AsAw = await fetch(URL);
        const res = await AsAw.json();
        setProducts(res);
      } catch {}
    };

    prod();
  }, [id]);

  return (
    <>
      {console.log(products, id)}
      {products.length ? <ItemList products={products} /> : <h2>loading...</h2>}
    </>
  );
};

export default ItemListContainer;

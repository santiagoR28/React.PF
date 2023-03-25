import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const prodCollection = collection(db, "products");

    const q = id
      ? query(prodCollection, where("category", "==", id))
      : prodCollection;

    getDocs(q)
      .then((data) => {
        const getProducts = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(getProducts);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  return (
    <>
      {error ? (
        <h1>Ha ocurrido un error inesperado</h1>
      ) : products.length ? (
        <ItemList products={products} />
      ) : (
        <h2>loading...</h2>
      )}
    </>
  );
};

export default ItemListContainer;

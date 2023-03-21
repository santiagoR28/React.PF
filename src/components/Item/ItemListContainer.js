import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocFromCache,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const miFuncion = async () => {
      const docRef = collection(db, "products");
      const docSnap = await getDocs(docRef);
      console.log("Document data:", docSnap);
    };
    miFuncion();

    // const prodCollection = collection(db, "products");
    // getDocs(prodCollection).then((d) => {
    //   console.log(d);
    // });

    const URL = id
      ? `https://fakestoreapi.com/products/category/${id}`
      : "https://fakestoreapi.com/products";

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
      {products.length ? <ItemList products={products} /> : <h2>loading...</h2>}
    </>
  );
};

export default ItemListContainer;

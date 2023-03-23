import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([false]);
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

    // setTimeout(() => {
    //   const productsCollection = collection(db, "products");
    //   //  const q = name
    //   //    ? query(productsCollection, where("categoria", "==", name))
    //   //    : productsCollection;
    //   getDocs(productsCollection).then((data) => {
    //     console.log(data);
    //     const list = data.docs.map((product) => {
    //       return {
    //         ...product.data(),
    //         id: product.id,
    //       };
    //     });
    //     setProducts(list);
    //   });
    // },
    // 1000);

    // const miFuncion = async () => {
    //   const docRef = collection(db, "products");
    //   const docSnap = await getDocs(docRef);
    //   console.log("Document data:", docSnap);
    // };
    // miFuncion();

    // setTimeout(() => {
    //
    // }, 1000);

    /*const URL = id
      ? `https://fakestoreapi.com/products/category/${id}`
      : "https://fakestoreapi.com/products";

    const prod = async () => {
      try {
        const AsAw = await fetch(URL);
        const res = await AsAw.json();
        setProducts(res);
      } catch(()=>{})
    };

    prod();*/
  }, [id]);

  return (
    <>
      {error ? (
        products.length ? (
          <ItemList products={products} />
        ) : (
          <h2>loading...</h2>
        )
      ) : (
        <h1>Ha ocurrido un error inesperado</h1>
      )}
    </>
  );
};

export default ItemListContainer;

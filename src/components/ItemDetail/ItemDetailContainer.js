import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const prodCollection = collection(db, "products");
    const refDoc = doc(prodCollection, id);
    getDoc(refDoc).then((data) => {
      console.log({
        id: data.id,
        ...data.data(),
      });
      setProduct({ ...data.data(), id: data.id });
    });
  }, [id]);

  return (
    <>
      {error ? (
        <h1>hubo un error</h1>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <h2>loading...</h2>
      )}
    </>
  );
};

export default ItemDetailContainer;

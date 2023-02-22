import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const IDC = async () => {
      try {
        const AsAw = await fetch(`https://fakestoreapi.com/products/${id}`);
        const res = await AsAw.json();
        setProduct({ ...res, stock: Math.floor(Math.random() * 50 + 1) });
      } catch {
        setError(true);
      }
    };
    IDC();
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

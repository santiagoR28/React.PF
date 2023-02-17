const Item = ({ prod }) => {
  return (
    <>
      <img src={prod.image} />
      <h2> {prod.title} </h2>
      <h4> {prod.price} </h4>
    </>
  );
};

export default Item;

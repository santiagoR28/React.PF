import "./css/NavBar.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 style={style.brand}> {greeting} </h2>
    </>
  );
};

export default ItemListContainer;

const style = {
  brand: {
    color: "rgb(255, 57, 90)",
    textAlign: "center",
    fontSize: "2rem",
  },
};

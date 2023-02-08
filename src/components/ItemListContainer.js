import "./css/NavBar.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2 style={{color:"rgb(255, 57, 90)", textAlign: "center", fontSize:"2rem"}}> {greeting} </h2>
    </>
  );
};

export default ItemListContainer;

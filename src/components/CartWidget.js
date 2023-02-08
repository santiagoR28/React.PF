import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./css/NavBar.css";

function CartWidget() {
  return (
    <>
      <button className="button">
        <ShoppingCartIcon fontSize="large" />
        <h3>2</h3>
      </button>
    </>
  );
}

export default CartWidget;

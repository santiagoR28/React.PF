import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/NavBar.css";

function WishListWidget() {
  return (
    <>
      <button className="button">
        <FavoriteIcon fontSize="large" />
      </button>
    </>
  );
}

export default WishListWidget;

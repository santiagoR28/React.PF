import "../css/Item.css";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <>
      <div className="hijo">
        <img className="img" src={prod.image} />
        <div className="info">
          <h3> {prod.title} </h3>
          <h3> {prod.price}$</h3>
          <Link to={`/item/${prod.id}`}>
            <button> mas informacion</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;

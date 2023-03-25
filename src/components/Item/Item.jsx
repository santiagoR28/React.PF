import "../css/Item.css";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <>
      <div className="hijo">
        <img className="img" src={prod.image} />
        <div className="info">
          <h3 className="title"> {prod.title} </h3>
          <h3> {prod.price}$</h3>
          <Link to={`/item/${prod.id}`}>
            <button className="btn-item"> mas informacion</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;

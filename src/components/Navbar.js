import CartWidget from "./CartWidget";
import "./css/NavBar.css";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <h1>hola</h1>
        <ul className="ul">
          <li>
            <a className="a" href="#">
              Pasteles
            </a>
          </li>
          <li>
            <a className="a" href="#">
              Galletas
            </a>
          </li>
          <li>
            <a className="a" href="#">
              Propuestas
            </a>
          </li>
          <li>
            <a
              className="a"
              href="#"
              style={{ color: "red", fontWeight: "bold" }}
            >
              Nosotros
            </a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
}

export default Navbar;

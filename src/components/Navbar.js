import CartWidget from "./CartWidget";
import "./css/NavBar.css";

function Navbar() {
  return (
    <>
      <navbar className="Navbar">
        <h1>Adri'sCakeShop</h1>
        <ul>
          <li>
            <a href="#">Pasteles</a>
          </li>
          <li>
            <a href="#">Galletas</a>
          </li>
          <li>
            <a href="#">Propuestas</a>
          </li>
          <li>
            <a href="#" style={{ color: "red", fontWeight: "bold" }}>
              Nosotros
            </a>
          </li>
        </ul>
        <CartWidget />
      </navbar>
    </>
  );
}

export default Navbar;

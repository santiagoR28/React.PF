import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      route: "/categories/electronics",
    },
    {
      id: 2,
      name: "Jewelery",
      route: "/categories/jewelery",
    },
    {
      id: 3,
      name: "Men's clothing",
      route: "/categories/men's clothing",
    },
    {
      id: 4,
      name: "Women's clothing",
      route: "/categories/women's clothing",
    },
  ];

  return (
    <>
      {categories.map((cat) => {
        return (
          <NavLink key={cat.id} className="a" to={cat.route}>
            {cat.name}
          </NavLink>
        );
      })}
    </>
  );
}

export default Categories;

import "../css/NavBar.css";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/Firebase";
import { getDocs, collection } from "firebase/firestore";
import { NavLink } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const prodCollection = collection(db, "categories");

    const ref = prodCollection;
    getDocs(ref).then((data) => {
      const getCategories = data.docs.map((cat) => {
        return {
          ...cat.data(),
          id: cat.id,
        };
      });
      setCategories(getCategories);
    });
  }, []);

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

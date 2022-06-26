import React, { useState } from "react";

import axios from "axios";

import "./Categories.css";

import CategoryItem from "./CategoryItem";
import "../Products/Product/Product.css";
import { useEffect } from "react";

export default function Categories() {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories").then((response) => {
      setCategories(response.data);
    });
  }, [categories])

  return (
    <section className="row  py-5 m-0">
      <h5 className="section-title mb-5">Categories</h5>
      <div className="categories">
        {categories.map((cat) => {
          return (
            <CategoryItem

              key={cat.id}
              id={cat.id}
              prodName={cat.name}
              imageSrc={cat.image}
              categoryName={cat.name}
            />
          );
        })}
      </div>
    </section>
  );
}

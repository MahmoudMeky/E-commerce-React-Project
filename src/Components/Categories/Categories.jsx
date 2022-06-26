import React, { useState } from "react";

import axios from "axios";

import "./Categories.css";

import CategoryItem from "./CategoryItem";
import "../Products/Product/Product.css";
import { useEffect } from "react";

export default function Categories() {
  let [categories, setCategories] = useState([]);

  useEffect(()=>{
    axios.get("https://api.escuelajs.co/api/v1/categories").then((response) => {
      setCategories(response.data);
  });
  },[categories])

  return (
    <section className="row p-0 p-md-5 py-5 m-0">
      <h5 className="section-title mb-5">Categories</h5>
      <div className="categories">
        {categories.map((prod) => {
          return (
            <CategoryItem
              key={prod.id}
              id={prod.id}
              prodName={prod.name}
              imageSrc={prod.image}
              imageAlt={prod.name}
            />
          );
        })}
      </div>
    </section>
  );
}

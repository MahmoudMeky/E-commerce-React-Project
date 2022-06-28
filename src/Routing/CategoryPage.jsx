import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Components/Products/Product/Product";
import { useParams, Navigate } from "react-router-dom";

export default function CategoryPage() {
  let { category } = useParams();

  let [categories, setCategories] = useState([]);
  let [numOfProductsToShow, setnumOfProductsToShow] = useState(12);
  let categoryID = false;

  switch (category) {
    case "clothes":
      categoryID = 1;
      break;
    case "electronics":
      categoryID = 2;
      break;
    case "furniture":
      categoryID = 3;
      break;
    case "shoes":
      categoryID = 4;
      break;
    case "others":
      categoryID = 5;
      break;

    default:
      categoryID = false;


      break;
  }
  useEffect(() => {
    axios
      .get(
        `https://api.escuelajs.co/api/v1/categories/${categoryID}/products?offset=0&limit=${numOfProductsToShow}`
      )
      .then((response) => {
        setCategories(response.data);
      });
  }, [numOfProductsToShow, category]);

  useEffect(() => {
    // Resetting Number of Items
    setnumOfProductsToShow(12)
  }, [category])


  function showMoreProducts() {
    setnumOfProductsToShow(numOfProductsToShow + 6);
  }

  return (
    <>{categoryID?
      <section className="products row p-0 p-md-5 py-5 m-0 justify-content-center gap-4" style={{minHeight:"calc(100vh - 118px)"}}>
        <h5 className="section-title">{category}</h5>
        <div className="items">
          {categories.map((cat) => {
            return (
              <Product
                key={cat.id}
                id={cat.id}
                prodName={cat.title.slice(0, 10)}
                prodPrice={cat.price}
                imageSrc={cat.images[0]}
                imageAlt={cat.title}
              />
            );
          })}
        </div>
        <button
          onClick={showMoreProducts}
          className="sales-btn btn bg-black px-3 text-white rounded-0 text-uppercase fw-bold p-2" 
        >
          Show More
        </button>
      </section>
      :<Navigate to={"/error"} replace={true}></Navigate>
    }
    </>
  );
}

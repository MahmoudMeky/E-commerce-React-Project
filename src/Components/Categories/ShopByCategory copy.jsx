import React from "react";
import CategoryItem from "./CategoryItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./ShopByCategory.css";

export default function ShopByCategory() {
  return (
    <section className="row p-0 p-md-5 py-5 m-0">
      <h5 className="section-title mb-5">Shop By Category</h5>

      <Splide
        className="text-center"
        aria-label="Shop By Category"
        options={{
          perPage: 6,
          gap: "10px",
          width: "100%",
          autoWidth: true,
          type: "loop",
          focus: "center",
          pagination: false,
          breakpoints: {
            767: {
              perPage: 1,
              type: "loop",
              focus: "center",
            },
          },
          mediaQuery: "max",
        }}
      >
        <SplideSlide>
          <div className="image-container">
            <img src="/category/1.jpg" alt="Image 1" />
          </div>
          <div className="text d-flex flex-column mt-4">
            <h5 className="fw-bold  text-uppercase  mb-0">Electronics</h5>
            <span className="product-number text-uppercase text-secondary">
              {11} Products
            </span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="image-container">
            <img src="/category/2.jpg" alt="Image 1" />
          </div>
          <div className="text d-flex flex-column mt-4">
            <h5 className="fw-bold  text-uppercase  mb-0">Jewelery</h5>
            <span className="product-number text-uppercase text-secondary">
              {11} Products
            </span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="image-container">
            <img src="/category/3.jpg" alt="Image 1" />
          </div>
          <div className="text d-flex flex-column mt-4">
            <h5 className="fw-bold  text-uppercase  mb-0">Men Clothes</h5>
            <span className="product-number text-uppercase text-secondary">
              {11} Products
            </span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="image-container">
            <img src="/category/4.jpg" alt="Image 1" />
          </div>
          <div className="text d-flex flex-column mt-4">
            <h5 className="fw-bold  text-uppercase  mb-0">Women Clothes</h5>
            <span className="product-number text-uppercase text-secondary">
              {11} Products
            </span>
          </div>
        </SplideSlide>
        {/* <SplideSlide>
          <div className="image-container">
            <img src="/category/5.jpg" alt="Image 1" />
          </div>
          <div className="text d-flex flex-column mt-4">
            <h5 className="fw-bold  text-uppercase  mb-0">Headphones</h5>
            <span className="product-number text-uppercase text-secondary">
              {11} Products
            </span>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="image-container">
            <img src="/category/6.jpg" alt="Image 1" />
          </div>
          <div className="text d-flex flex-column mt-4">
            <h5 className="fw-bold  text-uppercase  mb-0">Shoes</h5>
            <span className="product-number text-uppercase text-secondary">
              {11} Products
            </span>
          </div>
        </SplideSlide> */}
      </Splide>
    </section>
  );
}

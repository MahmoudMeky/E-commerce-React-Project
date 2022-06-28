import React from "react";
import Product from "./Product/Product";
import "./Products.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Products() {
    let [products, setProducts] = useState([]);
    let [numOfProductsToShow, setnumOfProductsToShow] = useState(12);

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${numOfProductsToShow}`).then((response) => {
            setProducts(response.data);
        });
    }, [numOfProductsToShow])

    function showMoreProducts() {

        setnumOfProductsToShow(numOfProductsToShow + 6)

    }

    return (
        <section className="products row p-0 p-md-5 py-5 m-0 justify-content-center gap-4" id="all-products">
            <h5 className="section-title">All Products</h5>
            <div className="items">
                {/* <Product id="1" prodName="H" prodPrice="200" imageSrc="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" imageAlt="HEY" /> */}
                {products.map((prod) => {
                    return <Product
                        key={prod.id}
                        id={prod.id}
                        prodName={prod.title.slice(0, 10)}
                        prodPrice={prod.price}
                        imageSrc={prod.images[0]}
                        imageAlt={prod.title}
                    />
                })}
            </div>
            <button onClick={showMoreProducts} className="sales-btn btn bg-black px-3 text-white rounded-0 text-uppercase fw-bold p-2">Show More</button>
        </section>
    );
}

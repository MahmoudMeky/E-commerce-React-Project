// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./ProductPage.css";
import ErrorPage from "./ErrorPage";
import CartContext from "../Store/CartContext";

export default function ProductPage() {
  // Import Cart Context
  let cartCtx = useContext(CartContext);
  let { id } = useParams();
  let [item, setItem] = useState(false);
  let [currentID, setcurrentID] = useState(id);

  let [error, setError] = useState(null);



  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${currentID}`)
      .then((response) => {
        setItem(response.data);
      }).catch((error) => {
        setError(true)
      })
  }, [id, currentID]);

  let nextItemHandler = () => {
    setcurrentID(+currentID + 1);
  };
  let prevItemHandler = () => {
    setcurrentID(+currentID - 1);
  };

  function addCartHandler() {
    cartCtx.addItem({
      id: item.id,
      name: item.title,
      price: item.price,
      imageSrc: item.images,
      amount: 1,
    });
  }

  return (
    <>

      {

        item ?

          <div className="product-page px-1 px-lg-5 mt-5 ">
            <div className="row px-3 d-flex flex-wrap h-100">
              <div
                className="product-images col-12 col-md-5 col-lg-4 p-0"
                style={{ minHeight: "800px" }}
              >
                <div className=" shadow-lg  h-100 p-2 bg-light">
                  <Swiper
                    className="product-slider h-100"
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 80,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                  >
                    <SwiperSlide>
                      <img
                        src={item.images[0]}
                        alt="Product-Image"
                        className="img-fluid w-100"
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center center",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={item.images[1]}
                        alt="Product-Image"
                        className="img-fluid w-100"
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center center",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={item.images[2]}
                        alt="Product-Image"
                        className="img-fluid w-100"
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center center",
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              <div className="text  col-12 col-md-7 col-lg-8  px-2 px-md-3 px-lg-5 py-3 d-flex flex-column gap-4">
                <div className="item-name  d-flex justify-content-between justify-content-sm-between flex-wrap">
                  <h3 className="fw-bold">{item.title}</h3>
                  <div className="control d-flex align-items-center gap-2">
                    <span className="next" onClick={prevItemHandler}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                      </svg>
                    </span>
                    <span className="prev" onClick={nextItemHandler}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="item-details">
                  <hr />
                  <h4>${Number(item.price).toFixed(2)}</h4>
                  <p className="lead">{item.description}</p>
                  <p className="lead  fs-6">
                    AVAILABILITY : <span className="fw-bold">IN STOCK</span>
                  </p>
                  <p className="lead fs-6">
                    ID : <span className="fw-bold">0{item.id}</span>
                  </p>
                  <hr />
                </div>

                <button
                  onClick={addCartHandler}
                  className="item-addcart btn btn-dark fw-bold gap-2 d-flex justify-content-center align-items-center px-4 py-3 rounded-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    style={{ fill: "white" }}
                  >
                    <path d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 4z"></path>
                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          :
          
          <ErrorPage/>
        
      
      }
    </>
  );
}

import React from "react";

import Carousel from "react-bootstrap/Carousel";

import "./Slider.css";

let interval = 5000;

function CarouselFadeExample() {
    return (
        <Carousel fade>
        <Carousel.Item interval={interval}>
            <img className="d-block" src="/landing/banner1.jpg" alt="First slide" />
            <Carousel.Caption className="text-start">
            <span className="script">Winter Fashion Trends</span>
            <h3 className="discount display-5 text-dark fw-bold text-uppercase">Get Up To 30% Off</h3>
            <h3 className="discount title  display-1 text-dark fw-bold">on Jackets</h3>
            <div className="start d-flex gap-4 align-items-center ">
                <h6 className="text-dark fw-bold text-uppercase m-0 ">Starting at</h6>
                <div className="price text-dark d-flex">
                    <h6 className="fw-bold">$</h6>
                    <h3 className="fw-bold">199</h3>
                    <h6 className="fw-bold">99</h6>
                </div>
            </div>
            <button className="landing-button btn bg-black px-3 text-white w-100 rounded-0">
            Shop Now
            </button>
            </Carousel.Caption>
        </Carousel.Item>
    
        <Carousel.Item interval={interval}>
            <img className="d-block" src="/landing/banner5.jpg" alt="First slide" />
            <Carousel.Caption className="text-start">
            <span className="script">Summer Fashion Trends</span>
            <h3 className="discount display-5 text-dark fw-bold text-uppercase">Get Up To 50% Off</h3>
            <h3 className="discount title  display-1 text-dark fw-bold">on Shirts</h3>
            <div className="start d-flex gap-4 align-items-center ">
                <h6 className="text-dark fw-bold text-uppercase m-0 ">Starting at</h6>
                <div className="price text-dark d-flex">
                    <h6 className="fw-bold">$</h6>
                    <h3 className="fw-bold">15</h3>
                    <h6 className="fw-bold">99</h6>
                </div>
            </div>
            <button className="landing-button btn bg-black px-3 text-white w-100 rounded-0">
            Shop Now
            </button>
            </Carousel.Caption>
        </Carousel.Item>
    
        </Carousel>
    );
}

export default CarouselFadeExample;

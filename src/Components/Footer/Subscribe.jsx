import React from "react";
import "./Subscribe.css";

export default function Subscribe() {
    return (
        <div className="subscribe row m-0">
        <div className="subscribe__content">
            <div className="text">
            <h5>Subscribe Newsletter</h5>
            <p className="lead">
                Get all the latest information on Events, Sales and Offers.
            </p>
            </div>
            <form action="">
                <input type="text" name="email_address" />
                <button>Subscribe</button>
            </form>
        </div>
        <div className="subscribe__icons">
            <div className="icon">
                <img src="/icons/fb.svg" alt="Facebook Icon" />
            </div>
            <div className="icon">
                <img src="/icons/tw.svg" alt="Twitter Icon" />
            </div>
            <div className="icon">
                <img src="/icons/ig.svg" alt="Instagram Icon" />
            </div>
        </div>
        </div>
    );
}

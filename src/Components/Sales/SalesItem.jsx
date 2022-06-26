import React from "react";
import "./SalesItem.css";

export default function SalesItem(props) {
    return (
        <div className="sales-item col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <img src={props.imgSrc} alt="sales-img" className="col-12" />
                {/* <div className={`${props.className} d-flex flex-column gap-2 align-items-center`}>
                    <h4 className="fw-bold  my-0">{props.title}</h4>
                    <span className="text-secondary">{props.caption}</span>
                    <button className="sales-btn btn bg-black px-3 text-white rounded-0 text-uppercase fw-bold p-2">
                    {props.btnTitle}
                    </button>
                </div> */}
        </div>
    );
}

import React from 'react'
import "./CategoryItem.css"

export default function CategoryItem(props) {
    return (
        <a className="item" href={`/categories/${props.categoryName.toLowerCase()}`}>
            <div className="img">
                <img
                    src={props.imageSrc}
                    className="img-fluid"
                    alt={props.categoryName}
                />
            </div>
            <div className="text p-3  mt-2 d-flex justify-content-center">
                <h5 className="m-0 fw-bold text-uppercase fs-4">{props.prodName}</h5>
            </div>
        </a>
    )
}

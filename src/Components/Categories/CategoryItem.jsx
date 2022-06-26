import React from 'react'

export default function CategoryItem(props) {
    return (
        <div className="item">
            <div className="img">
                <img
                    src={props.imageSrc}
                    className="img-fluid"
                    alt={props.imageAlt}
                />
            </div>
            <div className="text p-3  mt-2 d-flex justify-content-between">
                <h5 className=" m-0">{props.prodName}</h5>
            </div>
        </div>
    )
}

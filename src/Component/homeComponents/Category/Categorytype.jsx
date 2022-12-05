import React from "react";

export function Categorytype(props) {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div
                className="categories__item set-bg"
                data-setbg="assets/img/categories/category-5.jpg"
                style={{ 
                    backgroundImage: `url("${props.image}")` 
                  }}
            >
                <div className="categories__text">
                    <h4>{props.for}</h4>
                    <p>{props.items}</p>
                    <a href="#">{props.btn}</a>
                </div>
            </div>
        </div>
    );
}

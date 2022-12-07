import React from "react";

export function Insta(props) {
    return (
        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
            <div
                className="instagram__item set-bg"
               style={{
                backgroundImage : `url(${props.image})`
               }}
            >
                <div className="instagram__text">
                    <i className="fa fa-instagram"></i>
                    <a href="#">@ ashion_shop</a>
                </div>
            </div>
        </div>
    );
}
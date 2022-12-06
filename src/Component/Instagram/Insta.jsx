import React from "react";

export function Insta(props) {
    return (
        <div class="col-lg-2 col-md-4 col-sm-4 p-0">
            <div
                class="instagram__item set-bg"
               style={{
                backgroundImage : `url(${props.image})`
               }}
            >
                <div class="instagram__text">
                    <i class="fa fa-instagram"></i>
                    <a href="#">@ ashion_shop</a>
                </div>
            </div>
        </div>
    );
}

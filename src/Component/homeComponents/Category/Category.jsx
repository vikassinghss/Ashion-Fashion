import React from "react";
import { Categorytype } from "./Categorytype";

import category1 from "../../../img/categories/category-1.jpg";
import category2 from "../../../img/categories/category-2.jpg";
import category3 from "../../../img/categories/category-3.jpg";
import category4 from "../../../img/categories/category-4.jpg";
import category5 from "../../../img/categories/category-5.jpg";

const Category = () => {
  return (
    <div>
      <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="categories__item categories__large__item set-bg"
                style={{
                  backgroundImage: `url("${category1}")`,
                }}
              >
                <div className="categories__text">
                  <h1>Women’s fashion</h1>
                  <p>
                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid-unt labore edolore magna aliquapendisse ultrices
                    gravida.
                  </p>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <Categorytype
                  image={category2}
                  for="Men's fashion"
                  items="358 items"
                  btn="Shop now"
                />
                <Categorytype
                  image={category4}
                  for="cosmetics"
                  items="273 items"
                  btn="Shop now"
                />
                <Categorytype
                  image={category3}
                  for="Kid’s fashion"
                  items="273 items"
                  btn="Shop now"
                />

                <Categorytype
                  image={category5}
                  for="Accessories"
                  items="273 items"
                  btn="Shop now"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;

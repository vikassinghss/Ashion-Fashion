import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCategory = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    let apiCall = async () => {
      let apiData = await axios.get("https://fakestoreapi.com/products");
      let res = await apiData.data;
      setdata(res);
      console.log(res);
    };
    apiCall();
  }, []);

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section-title">
              <h4>New product</h4>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <ul className="filter__controls">
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".women">Women’s</li>
              <li data-filter=".men">Men’s</li>
              <li data-filter=".kid">Kid’s</li>
              <li data-filter=".accessories">Accessories</li>
              <li data-filter=".cosmetic">Cosmetics</li>
            </ul>
          </div>
        </div>
        <div className="row property__gallery">
        {data.map((val) => {
          return (
            
              <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    style={{
                      backgroundImage: `url("${val.image}")`,
                    }}
                  >
                    <div className="label new">New</div>
                    <ul className="product__hover">
                      <li>
                        <a
                          href="img/product/product-1.jpg"
                          className="image-popup"
                        >
                          <span className="arrow_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">{val.title}</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="product__price">$ {val.price}</div>
                  </div>
                </div>
              </div>
           
          );
        })}
         </div>
      </div>
    </section>
  );
};

export default ProductCategory;

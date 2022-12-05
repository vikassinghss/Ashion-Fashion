import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);

  useEffect(() => {
    let apiCall = async () => {
      let apiData = await axios.get("https://fakestoreapi.com/products");
      let res = await apiData.data;
      setdata(res);
      setfilter(res);
      // console.log(res);
    };
    apiCall();
  }, []);

  const typeFilter = (type) => {
    const filterResult = data.filter((val) => {
      return val.category === type;
    });
    setfilter(filterResult);
  };

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
              <li
                className="active"
                data-filter="*"
                onClick={() => setfilter(data)}
              >
                All
              </li>
              <li
                data-filter=".women"
                onClick={() => typeFilter("women's clothing")}
              >
                Women’s
              </li>
              <li
                data-filter=".men"
                onClick={() => typeFilter("men's clothing")}
              >
                Men’s
              </li>
              <li data-filter=".kid" onClick={() => typeFilter("electronics")}>
                Electronics
              </li>
              <li
                data-filter=".accessories"
                onClick={() => typeFilter("jewelery")}
              >
                jewelery
              </li>
              <li data-filter=".cosmetic">Cosmetics</li>
            </ul>
          </div>
        </div>
        <div className="row property__gallery">
          {filter.map((val) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mix women"
                key={val.id}
              >
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
                        <Link to=""
                        
                          className="image-popup"
                        >
                          <span
                            className="arrow_expand"
                           
                          ></span>
                        </Link>
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

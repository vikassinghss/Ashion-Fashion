import React, { useState, useEffect } from "react";
import axios from "axios";

const Latest = (props) => {
  const [latestProduct, setLatestProduct] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let apiData = await axios.get(
        "https://fakestoreapi.com/products?sort=desc"
      );
      let res = await apiData.data;
      // console.log(res);
      setLatestProduct(res);
    };
    getData();
  }, []);

  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="trend__content">
        <div className="section-title">
          <h4>{props.title} </h4>
        </div>
        {latestProduct.slice(0,3).map((val) => {
          return (
            <div className="trend__item" key={val.id}>
              <div className="trend__item__pic">
                <div
                  className="label new"
                  style={{
                    backgroundColor: "#50C878",
                    marginBottom: "4px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  New
                </div>
                <img src={val.image} alt="" height={58} />
              </div>
              <div className="trend__item__text">
                <h6>{val.title}</h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">{val.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Latest;

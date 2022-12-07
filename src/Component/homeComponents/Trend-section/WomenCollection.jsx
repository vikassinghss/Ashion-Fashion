import React, { useEffect, useState } from "react";
import axios from "axios";

const WomenCollection = (props) => {
  const [womenData, setWomenData] = useState([]);

  useEffect(() => {
    let getWomenData = async () => {
      let getData = await axios.get(
        "https://fakestoreapi.com/products/category/women's%20clothing?limit=3"
      );
      let res = getData.data;
      //   console.log(res);
      setWomenData(res);
    };
    getWomenData();
  }, []);

  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="trend__content">
        <div className="section-title">
          <h4>{props.title} </h4>
        </div>
        {womenData.map((val) => {
          return (
            <div className="trend__item" key={val.id}>
              <div className="trend__item__pic">
                <img src={val.image} alt="" height={58} />
              </div>
              <div className="trend__item__text">
                <h6>{val.title} hello</h6>
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

export default WomenCollection;

import axios from "axios";
import React, { useState, useEffect } from "react";
import shop from "../../img/shop/shop-1.jpg";
import Pagination from "@mui/material/Pagination";

export const ProductType = () => {
  const [data, setData] = useState([]);
  const [page , setPage] = useState();
 

  useEffect(() => {
    const apiCall = async () => {
      let apiuser = await axios.get(
        `https://fakestoreapi.com/products`
      );
      let res = await apiuser.data;
      setData(res);
      //   console.log(res);
    };

    apiCall();
  }, []);

  let clickHandel = async (e, v) => {
    console.log(v);
    let pageValue = v;
    setPage(pageValue)

    let forPage = async ()=>{
      let res = await axios.get( `https://fakestoreapi.com/products?limit=3&page=2`)
      let result = await res.data
      setData(result)
      console.log(result);
      console.log(pageValue);
  }
  forPage();
  };

  return (
    <>
      {data.map((item) => {
        return (
          <div className="col-lg-4 col-md-6" key={item.id}>
            <div className="product__item">
              <div
                className="product__item__pic set-bg"
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
              >
                <div className="label new">New</div>
                <ul className="product__hover">
                  <li>
                    <a href="img/shop/shop-1.jpg" className="image-popup">
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
                  <a href="#">{item.title}</a>
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="product__price">{item.price}</div>
              </div>
            </div>
          </div>
        );
      })}

      <Pagination 
      count={10} 
      pagecount={page}
      color="primary" 
      onChange={clickHandel}
      activeclassname={"active"} />
    </>
  );
};

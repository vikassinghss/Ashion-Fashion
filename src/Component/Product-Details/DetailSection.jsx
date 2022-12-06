import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import CarouselImg from "./Carouselmg";
import Widget from "./Widget";
import Description from "./Description";
import RelatedProducts from "./RelatedProducts";

const DetailSection = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  

  useEffect(() => {
    let productData = async () => {
      let getData = await axios.get(`https://fakestoreapi.com/products/${id}`);
      let res = await getData.data;
      console.log(res);
      setdata(res);
    };
    productData();
  }, []);


  return (
    <>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <div className="product__details__pic__left product__thumb nice-scroll">
                  <Link className="pt active" href="#product-1">
                    <img src={data.image} alt="" />
                  </Link>
                  <Link className="pt" href="#product-2">
                    <img src={data.image} alt="" />
                  </Link>
                  <Link className="pt" href="#product-3">
                    <img src={data.image} alt="" />
                  </Link>
                  <Link className="pt" href="#product-4">
                    <img src={data.image} alt="" />
                  </Link>
                </div>
                <div className="product__details__slider__content">
                  <CarouselImg
                    img1={data.image}
                    img2={data.image}
                    img3={data.image}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>{data.title}</h3>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <span>( 138 reviews )</span>
                </div>
                <div className="product__details__price">$ {data.price} </div>
                <p>{data.description}</p>
                <div className="product__details__button">
                  <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <input type="text" />
                    </div>
                  </div>
                  <Link href="#" className="cart-btn">
                    <span className="icon_bag_alt"></span> Add to cart
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon_adjust-horiz"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Widget />
              </div>
            </div>
            <Description />
          </div>
          <div className="row">
          <div class="col-lg-12 text-center">
                    <div class="related__title">
                        <h5>RELATED PRODUCTS</h5>
                    </div>
                </div>
            
          <RelatedProducts/>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailSection;

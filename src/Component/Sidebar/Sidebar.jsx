import React, { useState, useEffect } from "react";
import axios from 'axios';
import Pagination from "@mui/material/Pagination";
import shop from '../../img/shop/shop-1.jpg'

export const Sidebar = () => {
    const [data, setData] = useState([]);
    const [womdata, setWomData] = useState(data);
  const [page , setPage] = useState();

  const filterItem = (categoryWomen) => {
    let match = data.filter((currElem)=>{
        return currElem.category === categoryWomen;

    })
     //console.log("work");
    setWomData(match);

  }


  useEffect(() => {
    const apiCall = async () => {
      let apiuser = await axios.get(
        `https://fakestoreapi.com/products`
      );
      let res = await apiuser.data;
      setData(res);
      setWomData(res)
    //    console.log(res);
    };

    apiCall();
  }, []);

  let clickHandel = async (e, v) => {
    console.log(v);
    let pageValue = v;
    setPage(pageValue)
    

    let forPage = async ()=>{
      let res = await axios.get( 
        `https://fakestoreapi.com/products?limit=3&page=2`
        );
      let result = await res.data;
      setData(result)
      console.log(result);
      console.log(pageValue);
  }
  forPage();
  };

   return (
    <>
       <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <div className="shop__sidebar">
                        <div className="sidebar__categories">
                            <div className="section-title">
                                <h4>Categories</h4>
                            </div>
                            <div className="categories__accordion">
                                <div className="accordion" id="accordionExample">
                                <div className="card">
                                        <div className="card-heading active">
                                            <a data-toggle="collapse" data-target="#collapseOne" onClick={()=>filterItem("women's clothing")}>Women</a>
                                        </div>
                                </div>

                                <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseTwo" onClick={()=>filterItem("men's clothing")}>Men</a>
                                        </div>
                                </div>

                                <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseThree" onClick={()=>filterItem("women's clothing")}>Kids</a>
                                        </div>
                                </div>

                                <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFour" onClick={()=>filterItem("electronics")}>Electronics</a>
                                        </div>
                                </div>                               

                                <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFive" onClick={()=>filterItem("jewelery")}>Jewelery</a>
                                        </div>
                                </div>

                                <div className="card">
                                        <div className="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFive">Cosmetic</a>
                                        </div>
                                </div>

                                </div>
                            </div>  
                        </div>
                        <div className="sidebar__filter">
                            <div className="section-title">
                                <h4>Shop by price</h4>
                            </div>
                            <div className="filter-range-wrap">
                                <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                data-min="33" data-max="99"></div>
                                <div className="range-slider">
                                    <div className="price-input">
                                        <p>Price:</p>
                                        <input type="text" id="minamount"/>
                                        <input type="text" id="maxamount"/>
                                    </div>
                                </div>
                            </div>
                            <a href="#">Filter</a>
                        </div>
                        <div className="sidebar__sizes">
                            <div className="section-title">
                                <h4>Shop by size</h4>
                            </div>
                            <div className="size__list">
                                <label htmlFor="xxs">
                                    xxs
                                    <input type="checkbox" id="xxs"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="xs">
                                    xs
                                    <input type="checkbox" id="xs"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="xss">
                                    xs-s
                                    <input type="checkbox" id="xss"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="s">
                                    s
                                    <input type="checkbox" id="s"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="m">
                                    m
                                    <input type="checkbox" id="m"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="ml">
                                    m-l
                                    <input type="checkbox" id="ml"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="l">
                                    l
                                    <input type="checkbox" id="l"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="xl">
                                    xl
                                    <input type="checkbox" id="xl"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="sidebar__color">
                            <div className="section-title">
                                <h4>Shop by size</h4>
                            </div>
                            <div className="size__list color__list">
                                <label  htmlFor="black">
                                    Blacks
                                    <input type="checkbox" id="black"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="whites">
                                    Whites
                                    <input type="checkbox" id="whites"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="reds">
                                    Reds
                                    <input type="checkbox" id="reds"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="greys">
                                    Greys
                                    <input type="checkbox" id="greys"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="blues">
                                    Blues
                                    <input type="checkbox" id="blues"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="beige">
                                    Beige Tones
                                    <input type="checkbox" id="beige"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="greens">
                                    Greens
                                    <input type="checkbox" id="greens"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label  htmlFor="yellows">
                                    Yellows
                                    <input type="checkbox" id="yellows"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                 </div>


                <div className="col-lg-9 col-md-9">
                <div className="row">
                {womdata.map((item) => {
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
    </div>
    </div>
            <Pagination 
            count={10} 
            pagecount={page}
            color="primary" 
            onChange={clickHandel}
            activeclassname={"active"} />

          </div>
        </div>
    </section>
    </>
  )
}

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Pagination from "@mui/material/Pagination";
import SideBarItems from "./SideBarItems";
import { ShopByPrice } from "../ShopByPrice/ShopByPrice";
import ShopBySize from "../ShopBySize/ShopBySize";
import ShopByColor from "../ShopByColor/ShopByColor";


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
      console.log(res);
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
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseTwo" onClick={()=> setWomData(data)}>All</a>
                                                    </div>
                                            </div>

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
                                <ShopByPrice/>
                                <ShopBySize/>
                                <ShopByColor/>
                 </div>
              </div>
                      <div className="col-lg-9 col-md-9">
                        <div className="row">
                          {womdata.map((item) => {
                            return (
                              <SideBarItems 
                                key={item.id}
                                id={item.id}
                                image={item.image}
                                price={item.price}
                                title={item.tile} 
                              />
                            );
                          })}
                        </div>
                        {/* <Pagination/> */}
          
                        <Pagination 
                          count={10} 
                          pagecount={page}
                          color="primary" 
                          onChange={clickHandel}
                          activeclassname={"active"}
                        />
                      </div>
            </div>
         </div>
    </section>
    </>
  )
}

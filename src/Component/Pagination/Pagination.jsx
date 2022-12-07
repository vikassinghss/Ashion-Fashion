import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

const Pagination = () => {
    const [page , setPage] = useState();

    useEffect(()=>{
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
    })
  
  return (
    <>
       <div className="col-lg-9 col-md-9">
            <div className="row">
            <Pagination 
                count={10} 
                pagecount={page}
                color="primary" 
                onChange={clickHandel}
                activeclassname={"active"}
            />
            </div>
        </div>
    </>
  )
}

export default Pagination
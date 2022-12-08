import React, { useState,useEffect } from 'react'

const Pagination = ({showPerPage, onPaginationChange, total}) => {
  // console.log(showPerPage);
  const[counter, setCounter] = useState(1);

  useEffect(()=>{
      // console.log("object");
      const value = showPerPage * counter;
      // console.log("start value:", value - showPerPage);
      // console.log("end value:", value);
      onPaginationChange(value - showPerPage, value)
  },[counter]);

  const onButtonClick = (type) => {
    if(type === "prev"){
      if(counter === 1) {
        setCounter(1)
      }else{
        setCounter(counter - 1);
      }

    }else if(type === "next"){
        if(Math.ceil(total / showPerPage)=== counter){
          setCounter(counter)
        }else{
          setCounter(counter + 1)
        }
    }

  };

  return (
    <div className="d-flex justify-content-between">
       <button className="btn btn-primary" 
       onClick={()=>onButtonClick('prev')}>
        Previous
        </button>

       <button className="btn btn-primary"
       onClick={()=>onButtonClick('next')}>
        Next
        </button>

    </div>
  )
}

export default Pagination;

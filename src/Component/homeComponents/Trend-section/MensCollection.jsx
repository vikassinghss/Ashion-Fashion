import React, {useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'

const MensCollection = (props) => {
const [mendata , setmendata] = useState([])
    useEffect(()=>{
        const getCategory = async()=>{
            const apiData = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing?limit=3")
           const res = await apiData.data
        //    console.log(res);
           setmendata(res)
            
        }
        getCategory()

    },[])
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
    <div className="trend__content">
      <div className="section-title">
        <h4>{props.title} </h4>
      </div>
             {
                mendata.map((val)=>{
                    return (
                        <div className="trend__item" key={val.id}>
              <div className="trend__item__pic">
                <img src={val.image} alt=""  height={58}/>
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

                    )
                    
                })
             } 
</div>
  </div>

  )
}

export default MensCollection
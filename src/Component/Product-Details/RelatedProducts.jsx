import React,{useEffect , useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const RelatedProducts = () => {
    const [related, setrelateddata] = useState([]);

    useEffect(() => {
        let relatedProduct = async () => {
          let res = await axios.get("https://fakestoreapi.com/products?limit=4");
          let result = await res.data;
          setrelateddata(result);
        };
        relatedProduct();
      });
    
  return (
    <>


    {related.map((val)=>{
            return(
<<<<<<< HEAD



                <div className="col-lg-3 col-md-4 col-sm-6">
=======
            <div className="col-lg-3 col-md-4 col-sm-6" key={val.id}>
>>>>>>> origin/fashion
                    <div className="product__item">
                     <Link to={`/productdetails/${val.id}`}>  <div className="product__item__pic set-bg"  style={{
                        backgroundImage: `url("${val.image}")`,
                      }}> 
                            <ul className="product__hover">
                                <li><a href="img/product/related/rp-2.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                                <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                                <li><a href="#"><span className="icon_bag_alt"></span></a></li>
                            </ul>
                        </div> </Link> 
                        <div className="product__item__text">
                            <h6><a href="#">{val.title}</a></h6>
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
<<<<<<< HEAD
                </div>
=======
            </div>
            
>>>>>>> origin/fashion
            )
        })
    }
    </>
    
  )
}

export default RelatedProducts
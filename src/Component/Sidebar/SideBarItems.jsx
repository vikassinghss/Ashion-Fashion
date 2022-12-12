import { Link } from "react-router-dom";


const SideBarItems = (props) => {

    const {id, title, price, image} = props;

    return (
        <div className="col-lg-4 col-md-6" key={id}>
        <div className="product__item">
        <Link to={`/productdetails/${id}`}>
         <div
           className="product__item__pic set-bg"
           style={{
             backgroundImage: `url("${image}")`,
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
       </Link>
       <div className="product__item__text">
         <h6>
           <a href="#">{title}</a>
         </h6>
         <div className="rating">
           <i className="fa fa-star"></i>
           <i className="fa fa-star"></i>
           <i className="fa fa-star"></i>
           <i className="fa fa-star"></i>
           <i className="fa fa-star"></i>
         </div>
         <div className="product__price">{price}</div>
       </div>
     </div>
       </div>
    );
}


export default SideBarItems;
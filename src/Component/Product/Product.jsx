import React from 'react'
import instagram from '../../img/instagram/insta-1.jpg'


const Product = () => {
  return (
    <div>
        <div className="instagram">
        <div className="container-fluid">
            <div className="row">
               
                <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div className="instagram__item set-bg" 
                     style={{
                        backgroundImage:`url("${instagram}")`

                        }}>
                        <div className="instagram__text">
                            <i className="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div className="instagram__item set-bg"style={{backgroundImage:`url(assets/img/instagram/insta-2.jpg)`}}>
                        <div className="instagram__text">
                            <i className="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div className="instagram__item set-bg" style={{backgroundImage:`url(assets/img/instagram/insta-3.jpg)`}}>
                        <div className="instagram__text">
                            <i className="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div className="instagram__item set-bg" style={{backgroundImage:`url(assets/img/instagram/insta-4.jpg)`}}>
                        <div className="instagram__text">
                            <i className="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div className="instagram__item set-bg" style={{backgroundImage:`url(assets/img/instagram/insta-5.jpg)`}}>
                        <div className="instagram__text">
                            <i className="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                    <div className="instagram__item set-bg" style={{backgroundImage:`url(assets/img/instagram/insta-6.jpg)`}}>
                        <div className="instagram__text">
                            <i className="fa fa-instagram"></i>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
    
  )
}

export default Product
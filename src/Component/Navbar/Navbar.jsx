import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        {/* <!-- Offcanvas Menu Begin --> */}
    <div className="offcanvas-menu-overlay"></div>
    <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>
        <ul className="offcanvas__widget">
            <li><span className="icon_search search-switch"></span></li>
            <li><a href="#"><span className="icon_heart_alt"></span>
                <div className="tip">2</div>
            </a></li>
            <li><a href="#"><span className="icon_bag_alt"></span>
                <div className="tip">2</div>
            </a></li>
        </ul>
        <div className="offcanvas__logo">
            <a href="./index.html"><img src="assets/img/logo.png" alt=""/></a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
    </div>
    {/* <!-- Offcanvas Menu End -->  */}
        <header className="header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-2">
                    <div className="header__logo">
                        <Link to='/'><img src="assets/img/logo.png" alt="logo"/></Link>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                    <nav className="header__menu">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="#">Women’s</Link></li>
                            <li><Link to="#">Men’s</Link></li>
                            <li><Link to="/">Shop</Link></li>
                            <li><Link to="#">Pages</Link>
                                <ul className="dropdown">
                                    {/* <li><Link to="/productdetails">Product Details</Link></li> */}
                                    <li><Link to="/">Shop Cart</Link></li>
                                    <li><Link to="/">Checkout</Link></li>
                                    <li><Link to="/">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__right">
                        <div className="header__right__auth">
                            <Link to="">Login</Link>
                            <a to="">Register</a>
                        </div>
                        <ul className="header__right__widget">
                            <li><span className="icon_search search-switch"></span></li>
                            <li><Link to="#"><span className="icon_heart_alt"></span>
                                <div className="tip">2</div>
                            </Link></li>
                            <li><Link to = ""><span className="icon_bag_alt"></span>
                                <div className="tip">2</div>
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="canvas__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Navbar
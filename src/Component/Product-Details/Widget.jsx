import React from 'react'

const Widget = () => {
  return (
    <div className="product__details__widget">
                            <ul>
                                <li>
                                    <span>Availability:</span>
                                    <div className="stock__checkbox">
<<<<<<< HEAD
                                        <label for="stockin">
=======
                                        <label htmlFor="stockin">
>>>>>>> origin/fashion
                                            In Stock
                                            <input type="checkbox" id="stockin"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Available color:</span>
                                    <div className="color__checkbox">
<<<<<<< HEAD
                                        <label for="red">
                                            <input type="radio" name="color__radio" id="red" checked/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label for="black">
                                            <input type="radio" name="color__radio" id="black"/>
                                            <span className="checkmark black-bg"></span>
                                        </label>
                                        <label for="grey">
=======
                                        <label htmlFor="red">
                                            <input type="radio" name="color__radio" id="red" checked/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="black">
                                            <input type="radio" name="color__radio" id="black"/>
                                            <span className="checkmark black-bg"></span>
                                        </label>
                                        <label htmlFor="grey">
>>>>>>> origin/fashion
                                            <input type="radio" name="color__radio" id="grey"/>
                                            <span className="checkmark grey-bg"></span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Available size:</span>
                                    <div className="size__btn">
<<<<<<< HEAD
                                        <label for="xs-btn" className="active">
                                            <input type="radio" id="xs-btn"/>
                                            xs
                                        </label>
                                        <label for="s-btn">
                                            <input type="radio" id="s-btn"/>
                                            s
                                        </label>
                                        <label for="m-btn">
                                            <input type="radio" id="m-btn"/>
                                            m
                                        </label>
                                        <label for="l-btn">
=======
                                        <label htmlFor="xs-btn" className="active">
                                            <input type="radio" id="xs-btn"/>
                                            xs
                                        </label>
                                        <label htmlFor="s-btn">
                                            <input type="radio" id="s-btn"/>
                                            s
                                        </label>
                                        <label htmlFor="m-btn">
                                            <input type="radio" id="m-btn"/>
                                            m
                                        </label>
                                        <label htmlFor="l-btn">
>>>>>>> origin/fashion
                                            <input type="radio" id="l-btn"/>
                                            l
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <span>Promotions:</span>
                                    <p>Free shipping</p>
                                </li>
                            </ul>
<<<<<<< HEAD
                        </div>
=======
    </div>
>>>>>>> origin/fashion
  )
}

export default Widget
import React from 'react'
import Banner from '../../Component/homeComponents/Banner/Banner'
import Category from '../../Component/homeComponents/Category/Category'
import Delivery from '../../Component/homeComponents/Delivery/Delivery'
import Discount from '../../Component/homeComponents/Discount/Discount'
import ProductCategory from '../../Component/homeComponents/ProductSection/ProductCategory'
import Trend from '../../Component/homeComponents/Trend-section/Trend'


const Home = () => {
  return (
    <div>
        <Category/>
        <ProductCategory/>
        <Banner/>
        <Trend/>
        <Discount/>
        <Delivery/>
        
    </div>
  )
}

export default Home
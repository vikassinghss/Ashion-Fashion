import React from 'react'
import Banner from '../../Component/homeComponents/Banner/Banner'
import Category from '../../Component/homeComponents/Category/Category'
import ProductCategory from '../../Component/homeComponents/ProductSection/ProductCategory'
import Trend from '../../Component/homeComponents/Trend-section/Trend'


const Home = () => {
  return (
    <div>
        <Category/>
        <ProductCategory/>
        <Banner/>
        <Trend/>
        
    </div>
  )
}

export default Home
import React from 'react'
import HomeShop from '../../../Component/HomeShop/HomeShop'
import { ProductType } from '../../../Component/ProductType/ProductType'
import Product from '../../../Component/Product/Product'
import { Sidebar } from '../../../Component/Sidebar/Sidebar'

const Shop = () => {
  return (
    <div>
        <HomeShop/>
        <Sidebar/>
        <Product/>
        {/* <ProductType/> */}
        
      

    </div>
  )
}

export default Shop
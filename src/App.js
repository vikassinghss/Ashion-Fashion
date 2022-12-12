import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Home/Shop/Shop'
import Footer from './Component/Footer/Footer'
import ProductDetails from './Pages/Product/ProductDetails'
import Functions from './Functions'
import Instagram from './Component/Instagram/Instagram'


const App = () => {
  return (
    <div>
      <Router>
        
       <Functions/>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/productdetails/:id' element={<ProductDetails/>}/>
          <Route path='/Shop' element={<Shop/>}/>
           </Routes>
           <Instagram/>
           <Footer/>

        </Router>
    
      
    </div>
  )
}

export default App
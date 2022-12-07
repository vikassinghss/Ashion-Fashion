import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Home/Shop/Shop'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
           </Routes>
        </Router>
    
      
    </div>
  )
}

export default App
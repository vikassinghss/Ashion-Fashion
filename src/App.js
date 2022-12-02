import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
           </Routes>
        </Router>
    
      
    </div>
  )
}

export default App
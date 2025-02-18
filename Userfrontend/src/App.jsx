import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Service from './Components/Service/Service'
import  {Route, Routes} from 'react-router-dom'
import Profile from './Components/Profile/Profile'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import ServiceHistory from './Components/ServiceHistory/ServiceHistory'
import Products from './Components/Products/Products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/viewProfile' element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/serviceHistory" element={<ServiceHistory/>}/>
        <Route path='/product' element={<Products/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Aside from './Components/Aside/Aside'
import { Route,Routes } from 'react-router-dom'
import Assigment from './Components/Assigments/Assigment'
import ServiceForm from './Components/ServiceForm/ServiceForm'

const App = () => {
  return (
    <div className='container'>
      <Aside/>
      <Routes>
        <Route path = "/" element={<Dashboard/>}/>
        <Route path = "/assignment" element={<Assigment/>}/>
        <Route path = "/serviceFrom" element={<ServiceForm/>}/>
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Asidebar from './Components/Asidebar/Asidebar'
import { Route,Routes } from 'react-router-dom'
import User from './Components/User/User'

const App = () => {
  return (
    <div className='main-container'>
      <Asidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/AddUserC' element={<User data={'Customer'}/>} />
        <Route path='/AddUserS' element={<User data={'Service Boy'}/>} />
        <Route path='/AddUserA' element={<User data={'Admin'}/>} />
      </Routes>
    </div>
  )
}

export default App
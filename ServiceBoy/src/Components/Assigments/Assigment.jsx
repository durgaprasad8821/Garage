import React from 'react'
import './Assigment.css'
import AssignedTickets from '../AssignedTickets/AssignedTickets'

const Assigment = () => {
  return (
    <div className='ass-container'>
        <AssignedTickets/>
        <AssignedTickets/>
    </div>
  )
}

export default Assigment
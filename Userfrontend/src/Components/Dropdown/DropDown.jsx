import React, { useState } from 'react'
import "./Dropdown.css"
import { Link } from 'react-router-dom';
const DropDown = (props) => {
    const [data , setData] = useState(false);
  return (
    <div>
        
            {
                props.item === "services" ? 
                <ul className="dropdown-menu">
                    <Link to = {'/service'} style={{textDecoration:'none', marginLeft : '-10px'}}><li><a href="#">Book Service</a></li></Link>
                    <Link to = {'/serviceHistory'} style={{textDecoration:'none', marginLeft : '-10px'}}><li><a href="#">Service History</a></li></Link>
                </ul>
                :
                <ul className="dropdown-menu">
                    <Link to = {'/viewProfile'} style={{textDecoration:'none', marginLeft : '-10px'}}><li><a href="#">View Profile</a></li></Link>
                    <li><a href="#">Logout</a></li>
                </ul>

            }
            
    </div>
  )
}

export default DropDown
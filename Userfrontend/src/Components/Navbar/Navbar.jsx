import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Images/CarserviceLog-removebg-preview.png';
import userlogo from '../../assets/Images/images.png';
import DropDown from '../Dropdown/DropDown';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropDownService , setDropdownService] = useState(false)
    const [dropDownProfile , setDropdownProfile] = useState(false);
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Car Service Logo"/>
            <span>Garage</span>
        </div>

        
        <ul className="nav-links">
            <li><a href="#"> <Link to={'/'}>Home</Link></a></li>
            <li><a href="#"> <Link to={'/product'}>Product</Link></a></li>

            
            <li className="service"
             onMouseEnter={() => setDropdownService(true)}
             onMouseLeave={() => setDropdownService(false)} 
            >
                <a href="#">Services </a>
                {dropDownService && <DropDown item = {"services"}/>}
            </li>

           <Link to = {'/about'}><li><a href="#">About us</a></li></Link>

            
            <li className="profile"
            onMouseEnter={() => setDropdownProfile(true)}
            onMouseLeave={() => setDropdownProfile(false)}
            >
                <a href="#">
                    {dropDownProfile && <DropDown item = {"Profile"}/>}
                    <img src={userlogo} alt="User Profile"/> John Doe 
                </a>
                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
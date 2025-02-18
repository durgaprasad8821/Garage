import React from 'react';
import './Header.css';
import headerImage from '../../assets/Images/header-image.jpg';
import carLogo from '../../assets/Images/carLogo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="header">
        <div class="header-content">
            <h1>Welcome to  Garage Car Service</h1>
            <p>We offer the best car services to keep your vehicle running smoothly and efficiently. Whether it's regular maintenance or emergency repairs, we’ve got you covered!</p>
            <div class="header-buttons">
                <button class="btn btn-primary"> <Link to={'/service'} style={{textDecoration:'none', color :'white'}}>Book Service</Link></button>
                <button class="btn btn-secondary">About Us</button>
            </div>
        </div>
        <div class="header-image">
            <img src= {carLogo} alt="Car Service" />
        </div>
    </header>
  )
}

export default Header
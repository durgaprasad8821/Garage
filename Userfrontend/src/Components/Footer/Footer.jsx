import React from 'react'
import './Footer.css'
import logo from '../../assets/Images/CarserviceLog-removebg-preview.png';
const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-logo">
            <img src= {logo} alt="Car Service Logo"/>
            <h2>Garage</h2>
        </div>

       
        <div class="footer-links">
            <ul>
                <li><a href="#">Blog </a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
        </div>

        
        <div class="footer-contact">
            <p><strong>Address:</strong> 123 Car Street, Auto City, TX</p>
            <p><strong>Email:</strong> support@garage.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>

             
            <div class="social-icons">
                <a href="#"><img src="https://static.vecteezy.com/system/resources/previews/018/910/719/non_2x/facebook-logo-facebook-icon-free-free-vector.jpg" alt="Facebook"/></a>
                <a href="#"><img src="https://cdn-icons-png.freepik.com/256/2496/2496110.png?semt=ais_hybrid" alt="Twitter"/></a>
                <a href="#"><img src="https://img.freepik.com/premium-vector/vector-logo-instragram_537078-367.jpg" alt="Instagram"/></a>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer
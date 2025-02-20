import React from 'react'
import './ServiceForm.css'

const ServiceForm = () => {
  return (
    <div className="service-form">
    <h2>Car Service Form</h2>

    <div className="form-container">
     
        <div className="form-left">
            <div className="form-group">
                <label htmlFor="user-select">👤 Select User:</label>
                <select id="user-select" >
                    <option value="">-- Select User --</option>
                    <option value="john">John Doe</option>
                    <option value="emma">Emma Smith</option>
                    <option value="david">David Miller</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="user-name">👤 User Name:</label>
                <p>Ramu</p>
                
            </div>

            <div className="form-group">
                <label htmlFor="email">📧 Email:</label>
                <p>rame@gmail.com</p>
                 
            </div>

            <div className="form-group">
                <label htmlFor="phone">📞 Phone Number:</label>
                <p>123456789</p>
                 
            </div>
        </div>

        
        <div className="form-right">
            <div className="form-group">
                <label>🛠 Select Car Part:</label>
                <div className="radio-group">
                    <label><input type="radio" name="car-part" value="engine"  /> Engine</label>
                    <label><input type="radio" name="car-part" value="brakes"  /> Brakes</label>
                    <label><input type="radio" name="car-part" value="tires"  /> Tires</label>
                    <label><input type="radio" name="car-part" value="battery"  /> Battery</label>
                </div>
            </div>

            <div className="form-group" id="parts-list" >
                <label>🔧 Select Specific Parts:</label>
                <div id="part-options"></div>
            </div>

            <button className="submit-btn">✅ Submit</button>
        </div>
    </div>
</div>



  )
}

export default ServiceForm
import React from 'react'
import './Service.css'
import { useState } from 'react';

const Service = () => {
    const [current , setCurrent] = useState(false);
    
  return (
    <section className="booking-container">
    <h2>Book Your Car Service</h2>

    <form className="booking-form">
      
        <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name"/>
        </div>

        <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone"/>
        </div>

        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email"/>
        </div>

        
        <div className="form-group">
            <label htmlFor="branch">Select Service Branch</label>
            <select id="branch">
                <option value="">Choose a branch</option>
                <option value="north">North Branch</option>
                <option value="south">South Branch</option>
                <option value="central">Central Branch</option>
            </select>
        </div>

        
        <div className="form-group">
            <label>Whose car are you booking?</label>
            <div className="radio-group">
                <div className='radio'>
                <input type="radio" name="car-owner" id="own-car" onClick={() => {setCurrent(false)}}/>
                <label htmlFor="own-car">MyCar</label>
                </div>
                <div className='radio'>
                <input type="radio" name="car-owner" id="other-car" onClick={() => {setCurrent(true)}} />
                <label htmlFor="other-car" >OtherCar</label>
                </div>
            </div>
        </div>

         
        <div id="other-car-details" class={current ? null : "other"}>
            <div className="form-group">
                <label htmlFor="friend-name">Friend's Name</label>
                <input type="text" id="friend-name" placeholder="Enter friend's name"/>
            </div>

            <div className="form-group">
                <label htmlFor="friend-phone">Friend's Phone</label>
                <input type="tel" id="friend-phone" placeholder="Enter friend's phone"/>
            </div>

            <div className="form-group">
                <label htmlFor="friend-car-model">Friend's Car Model</label>
                <input type="text" id="friend-car-model" placeholder="Enter car model"/>
            </div>

            <div className="form-group">
                <label htmlFor="friend-number-plate">Number Plate</label>
                <input type="text" id="friend-number-plate" placeholder="Enter number plate"/>
            </div>
        </div>

        
        <div className="form-group">
            <label htmlFor="service-type">Select Service</label>
            <select id="service-type">
                <option value="">Choose a service</option>
                <option value="oil-change">Oil Change</option>
                <option value="car-wash">Car Wash</option>
                <option value="brake-repair">Brake Repair</option>
                <option value="engine-check">Engine Check</option>
            </select>
        </div>

     
        <div className="form-group">
            <label htmlFor="service-date">Select Date</label>
            <input type="date" id="service-date"/>
        </div>

        <div className="form-group">
            <label htmlFor="service-time">Select Time</label>
            <input type="time" id="service-time"/>
        </div>

         
        <div className="form-group">
            <label htmlFor="notes">Additional Notes</label>
            <textarea id="notes" placeholder="Enter any specific requirements"></textarea>
        </div>

       
        <button type="submit" className="btn-book">Book Service</button>
    </form>
</section>

  )
}

export default Service
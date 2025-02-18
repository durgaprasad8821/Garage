import React from 'react'
import './Item.css'

const Item = ( props) => {
  return (
    <div class="service-card">
    <div class="service-image">
        <img src="car-repair.jpg" alt="Car Repair Service" />
    </div>
    <div class="service-info">
        <h3>Car Repair</h3>
        <p>Get your car repaired by expert mechanics, ensuring your vehicle runs like new. Fast, reliable, and affordable repairs!</p>
        <button class="btn btn-primary">Book Service</button>
    </div>
</div>
  )
}

export default Item
import React from 'react'
import "./Productitem.css"

const Productitem = (props) => {

    const {image , title , description , price} = props.car;
  return (
    <div class="product-card">
        <img src= {image} alt="Product 1" class="product-image"/>
        <h3 class="product-title"> {title}</h3>
        <p class="product-description">{description}</p>
        <div class="product-footer">
            <span class="product-price">{price}</span>
            <button class="add-to-cart-btn">Add to Cart</button>
        </div>
    </div>
  )
}

export default Productitem
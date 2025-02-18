import React from 'react'
import './Products.css'
import Carproducts from '../Data/Productdata.jsx';
import Productitem from './Productitem';
const Products = () => {
  return (
    <div class="product-container">
        <h2 class="product-heading">Products</h2>

        <div class="product-grid">
            {Carproducts.map((value, index) => (
                <Productitem car={value} key = {index}/>
            ))}

            </div>
    </div>
  )
}

export default Products
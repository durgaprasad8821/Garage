import React from 'react'
import './Features.css'
import carService from "../Data/Data.jsx"
import Item from '../Item/Item'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
        <FaArrowLeft />
    </div>
);


const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow next-arrow" onClick={onClick}>
        <FaArrowRight />
    </div>
);

const Features = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
  return (
    <section className="available-services" >
        <h2>Our Available Services</h2>
        <Slider {...settings} className='arrow'>
         
        {
            
            carService.map((value,index) =>(
                <Item service = {value} key = {index}/>
            ))
        }
        
        </Slider>
    </section>

  )
}

export default Features
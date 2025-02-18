import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
    <header className='head'>
        <h1>About Us</h1>
        <p>We are dedicated to providing top-quality services with innovation and passion.</p>
    </header>

    <section class="about">
        <div class="content">
            <h2 className='heading-h2'>Who We Are</h2>
            <p>Welcome to our company! We are a team of professionals dedicated to delivering top-notch solutions for our customers. Our mission is to create user-friendly, efficient, and high-quality services.</p>
        </div>
    </section>

    <section class="mission">
        <h2 className='heading-h2'>Our Mission</h2>
        <p>To empower businesses with innovative technology and seamless solutions that enhance productivity and user experience.</p>
    </section>

    <section class="vision">
        <h2 className='heading-h2'>Our Vision</h2>
        <p>To be a global leader in technology-driven solutions and create an impact in people's daily lives.</p>
    </section>

    </div>
  )
}

export default About
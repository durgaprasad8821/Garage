import React, { useState } from 'react'
import './ServiceHistory.css'

const ServiceHistory = () => {
    const [arrow , setArrow] = useState(false)
  return (
    <div className="service-history-container">
    <h2 className="service-history-title">Service History</h2>

    <div className='service-item'>
        <div className="service-header">
            <p className="service-date"><strong>Service Date:</strong> Jan 15, 2025</p>
            <p className="service-type"><strong>Service Type:</strong> Oil Change</p>
            <span className="dropdown-arrow" onClick={() => {setArrow(!arrow)}}>▼</span>
        </div>
        <div className={arrow ? "service-details" : "service-details service-details-hidden"}>
            <p><strong>Car Model:</strong> Tesla Model S</p>
            <p><strong>Service Center:</strong> AutoCare Center</p>
            <p><strong>Cost:</strong> $100</p>
            <p><strong>Feedback:</strong> "Excellent service! My car runs smoothly now."</p>
        </div>
    </div>
</div>
  )
}

export default ServiceHistory
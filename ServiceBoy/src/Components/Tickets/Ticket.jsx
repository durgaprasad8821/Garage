import React from 'react'
import './Ticket.css'

const Ticket = () => {
    return (
        <div class="service-card">
            <h3 class="car-model">Toyota Corolla 2021</h3>
            <p class="car-problem">Engine overheating issue</p>
            <div class="card-buttons">
                <button class="accept-btn">✔ Accept</button>
                <button class="reject-btn">✖ Reject</button>
            </div>
        </div>

    )
}

export default Ticket
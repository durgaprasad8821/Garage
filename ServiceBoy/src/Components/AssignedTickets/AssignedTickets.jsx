import React from 'react'
import './AssignedTickets.css'

const AssignedTickets = () => {
    return (

        <div class="service-card">
            <div class="card-header">
                <h3 class="user-name">John Doe</h3>
                <p class="phone-number">📞 +123 456 7890</p>
            </div>

            <div class="card-body">
                <p class="car-model">🚗 Toyota Corolla 2021</p>
                <p class="car-problem">⚠ Engine overheating issue</p>
            </div>

            <div class="card-footer">
                <label for="status">📊 Status:</label>
                <select class="status-dropdown" id="status">
                    <option value="start">Start</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </div>


    )
}

export default AssignedTickets
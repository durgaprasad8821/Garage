import React from 'react';
import './Dashboard.css';
import Ticket from '../Tickets/Ticket';

const Dashboard = () => {
    return (
        <div class="dashboard">
            <h2>Service Boy Dashboard</h2>
            <div class="stats-container">
                <div class="stat-card pending">
                    <h3>🚗 Pending Services</h3>
                    <p id="pendingCount">5</p>
                </div>
                <div class="stat-card completed">
                    <h3>✅ Completed This Month</h3>
                    <p id="completedCount">12</p>
                </div>
                <div class="stat-card leave">
                    <h3>📆 Upcoming Leaves</h3>
                    <p id="leaveCount">2</p>
                </div>
            </div>
             <div className='ticket-block'>
                <Ticket/>
             </div>
        </div>
    )
}

export default Dashboard
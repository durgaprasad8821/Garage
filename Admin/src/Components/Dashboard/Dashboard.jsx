import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="main-content">
            <div className="dashboard-header">Admin Dashboard</div>

            <div className="dashboard-cards">
                <div className="card">
                    <h3>Total Users</h3>
                    <div className="value">120</div>
                </div>
                <div className="card">
                    <h3>Active Services</h3>
                    <div className="value">8</div>
                </div>
                <div className="card">
                    <h3>Pending Requests</h3>
                    <div className="value">15</div>
                </div>
                <div className="card">
                    <h3>Revenue (₹)</h3>
                    <div className="value">₹ 1,25,000</div>
                </div>
                <div className="card">
                    <h3>Revenue (₹)</h3>
                    <div className="value">₹ 1,25,000</div>
                </div>
                <div className="card">
                    <h3>Revenue (₹)</h3>
                    <div className="value">₹ 1,25,000</div>
                </div>
                <div className="card">
                    <h3>Revenue (₹)</h3>
                    <div className="value">₹ 1,25,000</div>
                </div>
                <div className="card">
                    <h3>Revenue (₹)</h3>
                    <div className="value">₹ 1,25,000</div>
                </div>
            </div>

            <div> 
                <div className="request-card">
                    <div className="request-info">
                        <h3 className="user-name">John Doe</h3>
                        <p className="service-type">🔧 Oil Change</p>
                        <p className="request-time">📅 19 Feb 2025, 10:30 AM</p>
                    </div>
                    <div className="request-actions">
                        <button className="accept-btn">✅ Accept</button>
                        <button className="reject-btn">❌ Reject</button>
                    </div>
                </div>
            </div>
             
             

        </div>


    )
}

export default Dashboard
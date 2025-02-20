import React from 'react';
import './Aside.css';
import { Link } from 'react-router-dom';


const Aside = () => {
  return (
    <div className="sidebar">
    <div className="profile">
        <h3>John Doe</h3>
        <p>Service Technician</p>
    </div>
    <nav>
        <ul>
             <Link to={"/"} style={{textDecoration:'none'}}><li><a href="#">📊 Dashboard</a></li></Link>
             <Link to={"/assignment"} style={{textDecoration:'none'}}><li><a href="#">📄 Assigned Tickets</a></li></Link>
             <Link to={"/serviceFrom"} style={{textDecoration:'none'}}><li><a href="#">🛠 Servicing Form</a></li></Link>
            <li><a href="#">📜 Service History</a></li>
            <li><a href="#">📆 Leave Requests</a></li>
        </ul>
    </nav>

    <div className="logout">
        <button>🚪 Logout</button>
    </div>
</div>
  )
}

export default Aside
import React, { useState } from 'react'
import './Asidebar.css'
import { Link } from 'react-router-dom'

const Asidebar = () => {

    const [userBlock , setUserBlock] = useState(false);
    return (
        <aside class="sidebar">

            <div class="admin-profile">
                <img src="https://via.placeholder.com/60" alt="Admin Profile" class="profile-pic" />
                <h3 class="admin-name">John Doe</h3>
            </div>


            <nav class="nav-menu">
                <a href="#" class="nav-item"> <Link to={'/'} style={{textDecoration:'none', color : 'white'}}>📊 Dashboard </Link></a>
                <div onMouseEnter={() => {setUserBlock(true)}} onMouseLeave={() => {setUserBlock(false)}}>
                <a class="nav-item"> 👩‍💻 Add Users</a>
                <div className={userBlock ? 'child-list' : 'user-list child-list'}>
                <a href="#" class="nav-item"> <Link to={'/AddUserC'} style={{textDecoration:'none', color : 'white'}}>👤 Customer </Link></a>
                <a href="#" class="nav-item"> <Link to={'/AddUserS'} style={{textDecoration:'none', color : 'white'}}>🛠 Service Boy </Link></a>
                <a href="#" class="nav-item"> <Link to={'/AddUserA'} style={{textDecoration:'none', color : 'white'}}>🧑‍💼 Admin </Link></a> 
                </div>
                </div>
                <a href="#" class="nav-item">🔧 Services</a> 
                <a href="#" class="nav-item">📈 Analytics</a>
                <a href="#" class="nav-item">⚙️ Settings</a>
            </nav>

            <div class="logout-section">
                <button class="logout-btn">🚪 Logout</button>
            </div>
        </aside>

    )
}

export default Asidebar
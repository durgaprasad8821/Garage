import React from 'react'
import './User.css'
import AddUserModal from './Adduser';
import { useState } from 'react';


const User = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container">
        <h2 className='head'>{props.data}</h2>
    
    <div className="top-bar">
        <input type="text" id="search" placeholder="🔍 Search users..." />
        <button className="search-btn">Search</button>
        <button className="add-user-btn" onClick={() => {setIsModalOpen(true)}}>➕ Add {props.data}</button>
    </div>
    <div className="user-item">
        <div className="user-card">
            <div className="user-header">
                <span className="user-name">👤 John Doe</span>
                <button className="toggle-btn">⬇️</button>
            </div>
            <div className="user-details">
                <p>📧 Email: johndoe@example.com</p>
                <p>📞 Phone: +1 234 567 890</p>
                <p>🛠 Role: Service Boy</p>
                <p>📅 Joined: Jan 10, 2024</p>
                <div className="action-buttons">
                    <button className="edit-btn">✏️ Edit</button>
                    <button className="remove-btn">❌ Remove</button>
                </div>
            </div>
        </div>

        <div className="user-card">
            <div className="user-header">
                <span className="user-name">👑 Alice Smith</span>
                <button className="toggle-btn">⬇️</button>
            </div>
            <div className="user-details">
                <p>📧 Email: alice@example.com</p>
                <p>📞 Phone: +1 987 654 321</p>
                <p>🧑‍💼 Role: Admin</p>
                <p>📅 Joined: Feb 1, 2024</p>
                <div className="action-buttons">
                    <button className="edit-btn">✏️ Edit</button>
                    <button className="remove-btn">❌ Remove</button>
                </div>
            </div>
        </div>

        <div className="user-card">
            <div className="user-header">
                <span className="user-name">👑 Alice Smith</span>
                <button className="toggle-btn">⬇️</button>
            </div>
            <div className="user-details">
                <p>📧 Email: alice@example.com</p>
                <p>📞 Phone: +1 987 654 321</p>
                <p>🧑‍💼 Role: Admin</p>
                <p>📅 Joined: Feb 1, 2024</p>
                <div className="action-buttons">
                    <button className="edit-btn">✏️ Edit</button>
                    <button className="remove-btn">❌ Remove</button>
                </div>
            </div>
        </div>

    </div>
    <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} userType={props.data} />
</div>

  )
}

export default User
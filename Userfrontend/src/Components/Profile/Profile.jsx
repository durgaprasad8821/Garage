import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    
    <div className="profile-container">
        <h2>Profile Details</h2>

        <div className="profile-info">
            <label>Name:</label>
            <input type="text" id="name" value="John Doe" disabled/>

            <label>Address:</label>
            <input type="text" id="address" value="123 Main Street, Cityville" disabled/>

            <label>Gender:</label>
            <select id="gender"  disabled>
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>

            <label>Car Model:</label>
            <input type="text" id="carModel" value="Tesla Model S" disabled/>

            <label>Car Details:</label>
            <textarea id="carDetails" disabled>Electric, 2023 Model, Black</textarea>
        </div>

        <button id="editBtn" >Edit Profile</button>
        <button id="saveBtn" >Save Changes</button>
    </div>
  )
}

export default Profile
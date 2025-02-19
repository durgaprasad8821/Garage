import React from "react";
import './Adduser.css';

const AddUserModal = ({ isOpen, onClose , userType}) => {
  if (!isOpen) return null;  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form autoComplete="off">
        <div className="input-block">
          <label>Name:</label>
          <input type="text" name="name" required  placeholder="Enter the name"/><br/>
        </div>
        <div className="input-block">
          <label>PhNum:</label>
          <input type="number" name="name" required placeholder="Enter the Number" /><br/>
        </div>
        <div className="input-block">
          <label>Date:</label>
          <input type="date" name="name" required placeholder="Enter the Email"/><br/>
        </div>
        <div className="input-block">
          <label>Email:</label>
          <input type="email" name="name" required placeholder="Enter the Email"/><br/>
        </div>
        <div className="input-block">
          <label>Role:</label>
          <input type="text" name="name" required value = {userType} disabled/><br/>
        </div>
        <div className="input-block">
          <label>{userType === "Customer" ? 'Car-model:' : 'EmpId:'}</label>
          <input type="text" name="name" required /><br/>
        </div>
        <div className="input-block">
          <label>Gender:</label>
          <input type="radio" name="name" required  /> <span className="radio-m">Male</span>
          <input type="radio" name="name" required  /> <span className="radio-m">Female</span>
          <input type="radio" name="name" required  /> <span className="radio-m">Other</span>
        </div>
        <div className="input-block">
          <label>Password:</label>
          <input type="password" name="name" required /><br/>
        </div>


          <div className="modal-buttons">
            <button type="submit" className="save-btn">✅ Save</button>
            <button type="button" className="close-btn" onClick={onClose}>❌ Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;

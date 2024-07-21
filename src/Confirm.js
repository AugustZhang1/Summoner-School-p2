import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirm.css';


function Confirm() {
  const location = useLocation();
  const { name, email, date, time, notes } = location.state || {}; 

  return (
    <div className="confirm">
      <h2>Thank You for Booking!</h2>
      <p>We have received your booking and will get in touch with you soon.</p>
      <div className="booking-details">
        <h3>Booking Details:</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Notes:</strong> {notes}</p>
      </div>
    </div>
  );
}

export default Confirm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    notes: '',
    video: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'video') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm', { state: formData });
  };

  return (
    <div className="booking-form">
      <h2>Book Your Coaching Session</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="video">Upload a Video</label>
          <input type="file" id="video" name="video" accept="video/*" onChange={handleChange} />
        </div>
        <button className="button--primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;

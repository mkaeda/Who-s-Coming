import React, { useState } from 'react';
import './EventForm.css'
import './RSVPForm.css'
import { details } from './Event'

const RSVPForm = () => {
  // State to manage RSVP form inputs
  const [rsvpData, setRSVPData] = useState({
    attendeeName: '',
    attendanceStatus: 'yes',
    notes: '',
  });

  // Handle input changes in the RSVP form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRSVPData({
      ...rsvpData,
      [name]: value,
    });
  };

  // Handle RSVP form submission
  const handleRSVSubmit = (e) => {
    e.preventDefault();
    // Perform actions with RSVP form data (e.g., send to server, update state, etc.)
    // We probably want to update whatever object we are using as a fake database.
    // to idicate that this person rsvped and their response, here.
  };

  return (
    <form onSubmit={handleRSVSubmit}>
      <h1 className="form-title">RSVP for {details.eventName}</h1>
      <p className="form-subtitle">{details.eventDescription}</p>

      <h2>Event Details</h2>
      <div className="event-info">
        <strong>Date:</strong> {details.date}<br/>
        <strong>Time:</strong> {details.time}<br/>
        <strong>Location:</strong> {details.location}<br/>
        <strong>Participation Threshold:</strong> {details.participationThreshold}<br/>
        <strong>RSVP Deadline:</strong> {details.rsvpDeadline}
      </div>

      <h2>RSVP</h2>

      {/* Attendee Name */}
      <div className="form-field">
        <label htmlFor='attendeeName'>Attendee Name</label>
        <input
          type="text"
          name="attendeeName"
          value={rsvpData.attendeeName}
          onChange={handleInputChange}
          required
        />
      </div>


      {/* Attendance Status */}
      <div className='form-field'>
        <label htmlFor='attendanceStatus'>
          Attendance Status
        </label>
        <select
          name="attendanceStatus"
          value={rsvpData.attendanceStatus}
          onChange={handleInputChange}
        >
          <option value="yes">Yes, I will attend</option>
          <option value="no">No, I cannot attend</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit">Submit RSVP</button>
    </form>
  );
};

export default RSVPForm;

import React, { useState } from 'react';
import '../Form.css'

const RSVPForm = ({ eventDetails, onSubmit }) => {
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
    onSubmit(rsvpData);
  };

  return (
    <form onSubmit={handleRSVSubmit}>

      <h2>RSVP for Event</h2>
      {/* Attendee Name */}
      <label>
        Attendee Name
        <input
          type="text"
          name="attendeeName"
          value={rsvpData.attendeeName}
          onChange={handleInputChange}
          required
        />
      </label>

      {/* Attendance Status */}
      <label>
        Attendance Status
        <select
          name="attendanceStatus"
          value={rsvpData.attendanceStatus}
          onChange={handleInputChange}
        >
          <option value="yes">Yes, I will attend</option>
          <option value="no">No, I cannot attend</option>
        </select>
      </label>

      {/* Notes
      <label>
        Notes
        <textarea
          name="notes"
          value={rsvpData.notes}
          onChange={handleInputChange}
        />
      </label> */}

      {/* Submit Button */}
      <button type="submit">Submit RSVP</button>
    </form>
  );
};

export default RSVPForm;

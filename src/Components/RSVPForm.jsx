import React, { useRef, useEffect } from 'react';
import './EventForm.css';
import './RSVPForm.css';
import { details } from './Event';
import { calendarUtils } from './Calendar'; // Import the calendar utilities

// Simulating an update to the global state or a database
export let globalEventDetails = { ...details };

const buttonStyle = {
  display: 'inline-block', // Needed to apply margin and padding
  backgroundColor: '#007bff', // Example button color, adjust as needed
  color: 'white',
  padding: '5px 10px',
  margin: '5px',
  textDecoration: 'none', // Remove underline from link
  borderRadius: '5px', // Rounded corners
  textAlign: 'center',
  cursor: 'pointer',
  border: 'none'
};
const RSVPForm = () => {
  // Create refs for form fields
  const attendeeNameRef = useRef(null);
  const attendanceStatusRef = useRef('yes');

  const updateRSVPDisplay = () => {
    document.getElementById('rsvp-yes-list').innerHTML = globalEventDetails.rsvpYes.map(name => `<li class='attendee'>${name}</li>`).join('');
    document.getElementById('rsvp-no-list').innerHTML = globalEventDetails.rsvpNo.map(name => `<li>${name}</li>`).join('');
  };

  // When the component mounts, update the RSVP display
  useEffect(() => {
    updateRSVPDisplay();
  }, []);

  // Handle RSVP form submission
  const handleRSVSubmit = (e) => {
    e.preventDefault();
    // Access the form field values using the refs
    const attendeeName = attendeeNameRef.current.value;
    const attendanceStatus = attendanceStatusRef.current.value;
  
    // Update the global state or send the data to the server
    if (attendanceStatus === 'yes') {
      globalEventDetails.rsvpYes.push(attendeeName);
    } else {
      globalEventDetails.rsvpNo.push(attendeeName);
    }
  
    // Save RSVP response to localStorage
    localStorage.setItem('rsvpYes', JSON.stringify(globalEventDetails.rsvpYes));
    localStorage.setItem('rsvpNo', JSON.stringify(globalEventDetails.rsvpNo));
    
    window.dispatchEvent(new Event('rsvpUpdate'));

    // Trigger a re-render of RSVP lists
    document.getElementById('rsvp-yes-list').innerHTML = globalEventDetails.rsvpYes.map(name => `<li class='attendee'>${name}</li>`).join('');
    document.getElementById('rsvp-no-list').innerHTML = globalEventDetails.rsvpNo.map(name => `<li>${name}</li>`).join('');
  
    // Log the updated details to see the changes
    console.log(globalEventDetails);
  
    // Generate and display calendar links
    const iCalendarData = calendarUtils.createICalendarData(details);
    const googleCalendarUrl = calendarUtils.createGoogleCalendarUrl(details);
  
    // Use traditional DOM methods to show calendar buttons
    document.getElementById('calendar-buttons').style.display = 'block';
    document.getElementById('icalendar-link').href = `data:text/calendar;charset=utf8,${encodeURIComponent(iCalendarData)}`;
    document.getElementById('googlecalendar-link').href = googleCalendarUrl;
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
        <h3>RSVP Breakdown</h3>
        <div className="rsvp-breakdown">
        <div className="rsvp-list rsvp-yes">
          <h3>Coming</h3>
          <ul id="rsvp-yes-list">
            {/* This will be populated on form submit */}
          </ul>
        </div>
        <div className="rsvp-list rsvp-no">
          <h3>Not Coming</h3>
          <ul id="rsvp-no-list">
            {/* This will be populated on form submit */}
          </ul>
        </div>
      </div>
      </div>

      {/* Attendee Name */}
      <div className="form-field">
        <label htmlFor='attendeeName'>Attendee Name</label>
        <input
          type="text"
          name="attendeeName"
          ref={attendeeNameRef}
          required
        />
      </div>

      {/* Attendance Status */}
      <div className='form-field'>
        <label htmlFor='attendanceStatus'>Attendance Status</label>
        <select
          name="attendanceStatus"
          ref={attendanceStatusRef}
        >
          <option value="yes">Yes, I will attend</option>
          <option value="no">No, I cannot attend</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit">Submit RSVP</button>

      {/* Calendar Buttons Container */}
      <div id="calendar-buttons" style={{ display: 'none', marginTop: '10px' }}>
      <a id="icalendar-link" href="#" download="event.ics" style={buttonStyle}>Add to iCalendar</a>
      <a id="googlecalendar-link" href="#" target="_blank" rel="noopener noreferrer" style={buttonStyle}>Add to Google Calendar</a>
    </div>
    </form>
  );
};

export default RSVPForm;

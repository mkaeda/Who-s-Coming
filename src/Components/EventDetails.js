import React, {useRef, useEffect, useState } from 'react';
import CopyableTextLine from './CopyableTextLine/CopyableTextLine';
import './EventDetails.css'; // Make sure to create this CSS file to style your component
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { details } from './Event'
import { globalEventDetails } from './RSVPForm';

function EventDetails() {
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

  return (
    <div className="event-details-container">
      <h1 className="title">{details.eventName}</h1>
      <p className="subtitle">{details.eventDescription}</p>

      <div className='link-containter'>
        <div className="send-desc">Send this to your friends!</div>
        <CopyableTextLine text={details.url}/>

        <div className="password-desc">To return to this page, use this password!</div>

        <CopyableTextLine text={details.hostPswd}/>
      </div>

      {/* Display the rest of your event details here */}
      <h2>Event Details</h2>
      <div className="event-info">
        <strong>Date:</strong> {details.date}<br/>
        <strong>Time:</strong> {details.time}<br/>
        <strong>Location:</strong> {details.location}<br/>
        <strong>Participation Threshold:</strong> {details.participationThreshold}<br/>
        <strong>RSVP Deadline:</strong> {details.rsvpDeadline}
      </div>
      <a href='#' className='edit-link'>Edit <FontAwesomeIcon icon={faEdit}/></a>

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


      {/* <br/>

      <hr className='horizontal-line'/> */}

    </div>
  );
}

export default EventDetails;

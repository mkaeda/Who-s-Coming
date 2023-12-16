import React from 'react';
import CopyableTextLine from './CopyableTextLine/CopyableTextLine';
import './EventDetails.css'; // Make sure to create this CSS file to style your component
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { details } from './Event'

function EventDetails() {

  return (
    <div className="event-details-container">
      <h1>{details.eventName}</h1>
      <p>{details.eventDescription}</p>

      <CopyableTextLine text={details.url}/>

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

      <br/>

      <hr className='horizontal-line'/>

      <h2>RSVP Breakdown</h2>
      <div className="rsvp-breakdown">
        <div className="rsvp-list rsvp-yes">
            <h3>Coming</h3>
            <ul>
              {details.rsvpYes.map((name, index) => <li key={index} className='attendee'>{name}</li>)}
            </ul>
        </div>
        <div className="rsvp-list rsvp-no">
          <h3>Not Coming</h3>
          <ul>
            {details.rsvpNo.map((name, index) => <li key={index}>{name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
